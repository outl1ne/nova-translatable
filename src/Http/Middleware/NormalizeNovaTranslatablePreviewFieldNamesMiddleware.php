<?php

namespace Outl1ne\NovaTranslatable\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Middleware to normalize translatable field names in Nova API requests.
 *
 * Remaps /nova-api/groups/field/description.en/preview to /nova-api/groups/field/description.*\/preview
 */
class NormalizeNovaTranslatablePreviewFieldNamesMiddleware
{
    private static ?string $localePattern = null;

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Only process Nova API field preview requests
        if ($this->isFieldPreviewRequest($request)) {
            $this->normalizeFieldParameter($request);
        }

        return $next($request);
    }

    /**
     * Check if the request is a Nova field preview request.
     */
    private function isFieldPreviewRequest(Request $request): bool
    {
        $path = $request->path();

        // Match patterns like:
        // - nova-api/{resource}/field/{field}/preview
        // - nova-api/{resource}/{resourceId}/field/{field}/preview
        // - nova-api/{resource}/{resourceId}/field/{field}/preview/{relatedResource}
        // - nova-api/{resource}/{resourceId}/field/{field}/preview/{relatedResource}/{relatedResourceId}

        return str($path)->startsWith('nova-api/') &&
            str($path)->contains('/field/') &&
            str($path)->contains('/preview') &&
            str($request->route('field'))->contains('.');
    }

    /**
     * Normalize the field parameter by removing locale suffixes.
     */
    private function normalizeFieldParameter(Request $request): void
    {
        $field = $request->route('field');
        if (!$field) return;

        $pattern = $this->getLocalePattern();

        // Check if the field name has a locale suffix
        if (preg_match($pattern, $field, $matches)) {
            $normalizedField = preg_replace($pattern, '', $field);
            $normalizedField = "$normalizedField.*";

            // Update the route parameter
            $request->route()->setParameter('field', $normalizedField);

            // Also update the request input if it exists
            if ($request->has('field')) {
                $request->merge(['field' => $normalizedField]);
            }

            // Store the original field name and locale for potential use in the controller
            $request->attributes->set('original_field_name', $field);
            $request->attributes->set('field_locale', $matches[1]);
        }
    }

    private function getLocalePattern(): string
    {
        if (self::$localePattern !== null) {
            return self::$localePattern;
        }

        $locales = $this->getConfiguredLocales();

        // Build regex pattern from locale codes
        $localePattern = implode('|', array_map('preg_quote', $locales));
        self::$localePattern = '/\.(' . $localePattern . ')$/i';

        return self::$localePattern;
    }

    private function getConfiguredLocales(): array
    {
        $locales = [];

        if (config('nova-translatable.locales')) {
            $configLocales = config('nova-translatable.locales');

            if (is_array($configLocales)) {
                $locales = array_merge($locales, array_keys($configLocales));
            }
        }

        return array_unique(array_filter($locales));
    }
}
