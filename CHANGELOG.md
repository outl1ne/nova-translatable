# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.9.1] - 2021-08-17

### Added

- Added `uniqueId` property to send events to groups of translatables (for `nova-simple-repeatable`)

### Changed

- Updated packages

## [1.9.0] - 2021-05-26

### Added

- Added `prioritize_nova_locale` configuration option
- Added `display_type` configuration option (that currently allows `row` and `column` options)
- Added `$options = []` as second argument of `->translatable()`

### Changed

- Fixed missing `mergeConfigFrom`
- Fixed issue with `rulesFor` and `nova-flexible-content` (thanks to [@trippo](https://github.com/trippo))
- Updated packages

## [1.8.4] - 2021-05-17

### Changed

- Fix a JS runtime exception
- Updated packages

## [1.8.3] - 2021-05-13

### Changed

- Fix Nova 2.9 support

## [1.8.2] - 2021-05-12

### Changed

- Fixed issue with `rulesFor` when field was inside `nova-simple-repeatable`
- Updated packages

## [1.8.1] - 2021-05-11

### Changed

- Improved error displaying support with `nova-simple-repeatable`
- Updated packages

## [1.8.0] - 2021-05-10

### Added

- Added support for `laravel-translatable` version 5.0 (thanks to [@umimehar](https://github.com/umimehar))

### Changed

- Fixed case where `nova-translatable` inside `nova-simple-repeatable` inside `nova-flexible-content` wouldn't resolve values correctly
- Updated packages

## [1.7.2] - 2021-02-04

### Changed

- Fixed `nova-froala-field` incompatibility since `1.7.0`

## [1.7.1] - 2021-02-04

### Changed

- Fixed an issue when `rulesFor` second parameter was given as a string

## [1.7.0] - 2021-01-28

### Added

- Added a new vue component for `LocaleTabs` -> `nova-translatable-locale-tabs`
- Added `nova-simple-repeatable` support

### Changed

- Simplified `fill` method, removed duplicate code.

## [1.6.12] - 2021-01-21

### Changed

- Fixed PHP 8 support (thanks to [@manogi](https://github.com/manogi))
- Updated packages

## [1.6.11] - 2021-01-08

### Changed

- Updated packages

## [1.6.10] - 2020-11-19

### Added

- Added support for Slug field
- Added support for `->default` values

### Changed

- Changed `rulesFor` mixin to allow passing `array|callable|string` variables
- Fixed `formatRules` to include `->rules()` in locale specific rules.

## [1.6.9] - 2020-11-02

### Changed

- Fix Textarea crashing inside Flexible

## [1.6.8] - 2020-10-30

### Changed

- Allow original `resolveCallback` to be called
- Fix Textarea not rendering locale tabs when using `displayUsing`

## [1.6.7] - 2020-10-30

### Changed

- Fixed missing values after `resolve`
- Updated packages

## [1.6.6] - 2020-10-09

### Changed

- Further improved compatibility with wrapper fields

## [1.6.5] - 2020-10-08

### Changed

- Further improved compatibility with wrapper fields

## [1.6.4] - 2020-10-08

### Changed

- Improved compatibility with wrapper fields
- Updated packages

## [1.6.3] - 2020-09-30

### Changed

- Updated packages

## [1.6.2] - 2020-09-30

### Changed

- Fixed help text not being displayed
- Updated packages

## [1.6.1] - 2020-09-03

### Changed

- Fixed Textarea field crashing inside Flexible

## [1.6.0] - 2020-09-02

### Added

- Add `rulesFor` functionality to allow specifying locale specific validation rules (thanks to [@ngiraud](https://github.com/ngiraud))

### Changed

- Code cleanup
- Fixed `displayUsing` not working
- Updated packages

## [1.5.7] - 2020-07-13

### Changed

- Hide locale tabs when there is only one locale (thanks to [@manogi](https://github.com/manogi))
- Fix error messages not showing (thanks to [@webstack9](https://github.com/webstack9))
- Updated packages

## [1.5.6] - 2020-04-30

### Changed

- Fixed issue with Nova Flexible Content (thanks to [@voidgraphics](https://github.com/voidgraphics))

## [1.5.5] - 2020-04-29

### Changed

- Fixed JS runtime error (thanks to [@milewski](https://github.com/milewski))

## [1.5.4] - 2020-04-28

### Changed

- Fixed Textarea when not using `spatie/laravel-translatable` (thanks to [@milewski](https://github.com/milewski))
- Fixed issue with packages that populate more than 1 attribute on `FormData` (thanks to [@milewski](https://github.com/milewski))

## [1.5.3] - 2020-04-17

### Changed

- Fixed PHP 7.3 compatibility

## [1.5.2] - 2020-04-17

### Changed

- Fixed `is_nan` errors

## [1.5.1] - 2020-04-17

### Changed

- Fixed `is_nan` errors

## [1.5.0] - 2020-04-14

### Changed

- Added `Nova 3.3.1` support
- Fixed `Select` field not working
- Fixed `displayUsingLabels()` not working
- Fixed `Boolean` field not working

## [1.4.1] - 2020-03-05

### Added

- Support Nova 3.0 in `composer.json` requirements

## [1.4.0] - 2020-02-25

### Added

- Supported array value fields in Flexible

### Changed

- Fixed issue with error messages not being displayed (thanks to [@srinathreddydudi](https://github.com/srinathreddydudi))
- Further improved array value support
- Refactored code

## [1.3.2] - 2020-02-13

### Changed

- Improved key handling w/ array value support
- Improved validation and fields support

## [1.3.1] - 2020-02-10

### Changed

- Fixed invalid attribute issue with `nova-flexible-content` in some scenarios
- Updated packages

## [1.3.0] - 2020-02-04

### Added

- Added support for use inside `nova-flexible-content` (except Image and File fields)
- Added warning about Image and File fields inside `nova-flexible-content`

### Changed

- Refactored code for better readability, compatibility and performance

## [1.2.0] - 2020-01-27

### Added

- Added support for `KeyValue` field (thanks to [@ngiraud](https://github.com/ngiraud))

### Changed

- Set first (active) locale to Nova's configured locale (thanks to [@ngiraud](https://github.com/ngiraud))
- Moved macro registration from `boot()` to `register()` method to better support third-party packages
- Updated packages

## [1.1.2] - 2020-01-17

### Changed

- Added `method_exists` validation for `setTranslations` to support making fields in `nova-settings` translatable

## [1.1.1] - 2020-01-17

### Changed

- Fixed crash when saving w/ validation

## [1.1.0] - 2020-01-17

### Added

- Initial validation support

### Changed

- Improved support for 3rd party packages (ie `nova-settings`)
- Can now be used outside `Resource`'s
- Updated packages

### Known issues

- Attribute names end with `.${locale}` (ie `name.sv`) which makes them difficult to translate (in errors)
  - This may not be fixable at all unless Laravel adds more flexibility to the Validator

## [1.0.0] - 2019-12-30

Initial release.

- **Supports almost all fields** (including third party ones)
- **Simple to implement** with minimal code changes (after `spatie/laravel-translatable` support)
- Locale tabs to switch between different locale values of the same field
- **Double click** on a tab to switch all fields to that locale
