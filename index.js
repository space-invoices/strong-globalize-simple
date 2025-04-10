// packages/strong-globalize-simple/index.js

"use strict";

class StrongGlobalize {
  constructor(options) {
    if (typeof options === 'string') {
      // Handle case where rootDir is passed directly to constructor
      StrongGlobalize.SetRootDir(options);
    }

    // Initialize with default options
    this._options = {
      language: 'en',
      appLanguages: ['en'],
      htmlRegex: null,
      persistentLogging: false,
    };
  }

  // API - Set system defaults
  static SetDefaultLanguage(language) {
    // No-op implementation
    return language || 'en';
  }

  static SetRootDir(rootDir, options) {
    // No-op implementation
    return;
  }

  static SetHtmlRegex(regex) {
    // No-op implementation
    return regex;
  }

  static SetPersistentLogging(enabled) {
    // No-op implementation
    return enabled;
  }

  setLanguage(lang) {
    this._options.language = lang || 'en';
  }

  getLanguage() {
    return this._options.language || 'en';
  }

  // API - Formatters
  formatMessage(msgPath, variables) {
    if (variables) {
      let result = msgPath;
      Object.keys(variables).forEach(key => {
        result = result.replace(new RegExp(`${key}`, 'g'), variables[key]);
      });
      return result;
    }
    return msgPath;
  }

  t(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  m(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  formatCurrency(value, currencySymbol, options) {
    return currencySymbol ? `${currencySymbol}${value}` : `$${value}`;
  }

  c(value, currencySymbol, options) {
    return this.formatCurrency(value, currencySymbol, options);
  }

  formatDate(value, options) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    return String(value);
  }

  d(value, options) {
    return this.formatDate(value, options);
  }

  formatNumber(value, options) {
    return String(value);
  }

  n(value, options) {
    return this.formatNumber(value, options);
  }

  // API - Wrappers
  Error(msgPath, variables) {
    const message = this.formatMessage(msgPath, variables);
    return new Error(message);
  }

  format(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  f(msgPath, variables) {
    return this.format(msgPath, variables);
  }

  ewrite(msgPath, variables) {
    // No actual writing, just return what would be written
    return this.formatMessage(msgPath, variables);
  }

  owrite(msgPath, variables) {
    // No actual writing, just return what would be written
    return this.formatMessage(msgPath, variables);
  }

  write(msgPath, variables) {
    // No actual writing, just return what would be written
    return this.formatMessage(msgPath, variables);
  }

  // API - RFC 5424 Syslog Message Severities
  emergency(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  alert(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  critical(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  error(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  warning(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  notice(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  informational(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  // API - Node.js Console
  warn(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  info(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  log(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  // API - Misc Logging Levels
  help(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  debug(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  data(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  prompt(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  verbose(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  input(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }

  silly(msgPath, variables) {
    return this.formatMessage(msgPath, variables);
  }
}

// Create an instance that will be exported directly
const SG = new StrongGlobalize();

// Create a function that returns a new instance
function g(options) {
  return new StrongGlobalize(options);
}

// Attach static methods to the function
g.SetRootDir = StrongGlobalize.SetRootDir;
g.SetDefaultLanguage = StrongGlobalize.SetDefaultLanguage;
g.SetHtmlRegex = StrongGlobalize.SetHtmlRegex;
g.SetPersistentLogging = StrongGlobalize.SetPersistentLogging;

// Export the function as the main export
module.exports = g;

// Export the SG instance as a named export
module.exports.SG = SG;

// Also export the static methods directly
module.exports.SetRootDir = StrongGlobalize.SetRootDir;
module.exports.SetDefaultLanguage = StrongGlobalize.SetDefaultLanguage;
module.exports.SetHtmlRegex = StrongGlobalize.SetHtmlRegex;
module.exports.SetPersistentLogging = StrongGlobalize.SetPersistentLogging;

// If needed, you can also export the class directly
module.exports.StrongGlobalize = StrongGlobalize;
