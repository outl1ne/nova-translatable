# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
