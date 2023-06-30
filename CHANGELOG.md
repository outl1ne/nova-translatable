# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 30-07-2023

### Changed

- Use validation key instead of attribute when dealing with validation (thanks to [@RobertoNegro](https://github.com/RobertoNegro))
- Fixed numeric value saving when the number starts with + (thanks to [@RobertoNegro](https://github.com/RobertoNegro))
- Fixed Markdown fields preview displaying (thanks to [@lonnylot](https://github.com/lonnylot))
- Fixed saving the form via the inline form (thanks to [@jaap](https://github.com/jaap))
- Updated packages

## [2.1.6] - 16-01-2023

### Changed

- `locale_select.display_type` config key has been renamed to `locale_select_display_type`.
- Fixed issue with usage of dynamic property. Dynamic properties are deprecated in php 8.2

## [2.1.5] - 11-01-2023

### Changed

- Updated dependencies

## [2.1.4] - 03-11-2022

### Changed

- Fixed crash which originated from fields without a .fill() function

## [2.1.3] - 02-11-2022

### Changed

- Fixed crash which originated from dusk identifiers

## [2.1.2] - 28-10-2022

### Changed

- Added dusk identifiers to locale tabs

## [2.1.1] - 14-09-2022

### Fixed

- Fixed `dependsOn` invalid behaviour on initial render.

### Added

- Implemented `nova-kit/nova-packages-tool` package. new composer requirement.

## [2.1.0] - 02-09-2022

### Added

- Added Nova `->dependsOn()` support

### Changed

- Updated packages

## [2.0.6] - 19-08-2022

### Changed

- Fixed Nova locale retrieval (thanks to [@mikepluquin](https://github.com/mikepluquin))
- Updated packages

## [2.0.5] - 19-07-2022

### Changed

- Fixed detail fields showing as [object Object] in Nova 4.12
- Minimum Nova version set to 4.12
- Updated packages

## [2.0.4] - 09-06-2022

### Changed

- Pass active locale key to index field(s) as well

## [2.0.3] - 09-06-2022

### Changed

- Pass locale key to field components when rendering them to improve custom fields support

## [2.0.2] - 08-06-2022

### Changed

- Fixed issue with double top-border in some views
- Updated packages

## [2.0.1] - 24-05-2022

### Changed

- Fixed CodeMirror support (thanks to [@stepanenko3](https://github.com/stepanenko3))
- Fixed LocaleSelect not working
- Updated packages

## [2.0.0] - 02-05-2022

### Added

- Added Nova 4.0 support

### Changed

- Changed namespace from OptimistDigital to Outl1ne
- Drop PHP 7.X support
- Update packages
