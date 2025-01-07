import {
  DateTimeAdapter,
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE
} from "./chunk-LAYVCNPB.js";
import "./chunk-ZO7K2FVZ.js";
import "./chunk-DGPPD623.js";
import "./chunk-4XBWK6TD.js";
import "./chunk-EIAO2Z5M.js";
import "./chunk-T7WO5ZFD.js";
import {
  require_moment
} from "./chunk-4VD7P5JE.js";
import "./chunk-Y25F5ZV2.js";
import "./chunk-2MWLDQON.js";
import "./chunk-PIVVRCI5.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  Optional,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-R45CJUP5.js";
import "./chunk-KKSL7W6X.js";
import "./chunk-CXNAVVMS.js";
import "./chunk-XQSEKRDZ.js";
import "./chunk-HM5YLMWO.js";
import {
  __toESM
} from "./chunk-KBUIKKCC.js";

// node_modules/@danielmoncada/angular-datetime-picker-moment-adapter/fesm2022/danielmoncada-angular-datetime-picker-moment-adapter.mjs
var _moment = __toESM(require_moment(), 1);
var moment = _moment.default ? _moment.default : _moment;
var OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS = new InjectionToken("OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS", {
  providedIn: "root",
  factory: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY
});
function OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY() {
  return {
    useUtc: false,
    parseStrict: false
  };
}
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var MomentDateTimeAdapter = class _MomentDateTimeAdapter extends DateTimeAdapter {
  owlDateTimeLocale;
  options;
  _localeData;
  constructor(owlDateTimeLocale, options) {
    super();
    this.owlDateTimeLocale = owlDateTimeLocale;
    this.options = options;
    this.setLocale(owlDateTimeLocale || moment.locale());
  }
  setLocale(locale) {
    super.setLocale(locale);
    const momentLocaleData = moment.localeData(locale);
    this._localeData = {
      longMonths: momentLocaleData.months(),
      shortMonths: momentLocaleData.monthsShort(),
      longDaysOfWeek: momentLocaleData.weekdays(),
      shortDaysOfWeek: momentLocaleData.weekdaysShort(),
      narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
      dates: range(31, (i) => this.createDate(2017, 0, i + 1).format("D"))
    };
  }
  getYear(date) {
    return this.clone(date).year();
  }
  getMonth(date) {
    return this.clone(date).month();
  }
  getDay(date) {
    return this.clone(date).day();
  }
  getDate(date) {
    return this.clone(date).date();
  }
  getHours(date) {
    return this.clone(date).hours();
  }
  getMinutes(date) {
    return this.clone(date).minutes();
  }
  getSeconds(date) {
    return this.clone(date).seconds();
  }
  getTime(date) {
    return this.clone(date).valueOf();
  }
  getNumDaysInMonth(date) {
    return this.clone(date).daysInMonth();
  }
  differenceInCalendarDays(dateLeft, dateRight) {
    return this.clone(dateLeft).diff(dateRight, "days");
  }
  getYearName(date) {
    return this.clone(date).format("YYYY");
  }
  getMonthNames(style) {
    return style === "long" ? this._localeData.longMonths : this._localeData.shortMonths;
  }
  getDayOfWeekNames(style) {
    if (style === "long") {
      return this._localeData.longDaysOfWeek;
    }
    if (style === "short") {
      return this._localeData.shortDaysOfWeek;
    }
    return this._localeData.narrowDaysOfWeek;
  }
  getDateNames() {
    return this._localeData.dates;
  }
  toIso8601(date) {
    return this.clone(date).format();
  }
  isEqual(dateLeft, dateRight) {
    if (dateLeft && dateRight) {
      return this.clone(dateLeft).isSame(this.clone(dateRight));
    }
    return dateLeft === dateRight;
  }
  isSameDay(dateLeft, dateRight) {
    if (dateLeft && dateRight) {
      return this.clone(dateLeft).isSame(this.clone(dateRight), "day");
    }
    return dateLeft === dateRight;
  }
  isValid(date) {
    return this.clone(date).isValid();
  }
  invalid() {
    return moment.invalid();
  }
  isDateInstance(obj) {
    return moment.isMoment(obj);
  }
  addCalendarYears(date, amount) {
    return this.clone(date).add({
      years: amount
    });
  }
  addCalendarMonths(date, amount) {
    return this.clone(date).add({
      months: amount
    });
  }
  addCalendarDays(date, amount) {
    return this.clone(date).add({
      days: amount
    });
  }
  setHours(date, amount) {
    return this.clone(date).hours(amount);
  }
  setMinutes(date, amount) {
    return this.clone(date).minutes(amount);
  }
  setSeconds(date, amount) {
    return this.clone(date).seconds(amount);
  }
  createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }
    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    if (hours < 0 || hours > 23) {
      throw Error(`Invalid hours "${hours}". Hours has to be between 0 and 23.`);
    }
    if (minutes < 0 || minutes > 59) {
      throw Error(`Invalid minutes "${minutes}". Minutes has to between 0 and 59.`);
    }
    if (seconds < 0 || seconds > 59) {
      throw Error(`Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`);
    }
    const result = this.createMoment({
      year,
      month,
      date,
      hours,
      minutes,
      seconds
    }).locale(this.getLocale());
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  clone(date) {
    return this.createMoment(date).clone().locale(this.getLocale());
  }
  now() {
    return this.createMoment().locale(this.getLocale());
  }
  format(date, displayFormat) {
    date = this.clone(date);
    if (!this.isValid(date)) {
      throw Error("MomentDateTimeAdapter: Cannot format invalid date.");
    }
    return date.format(displayFormat);
  }
  parse(value, parseFormat) {
    if (value && typeof value === "string") {
      return this.createMoment(value, parseFormat, this.getLocale(), this.parseStrict);
    }
    return value ? this.createMoment(value).locale(this.getLocale()) : null;
  }
  get parseStrict() {
    return this.options && this.options.parseStrict;
  }
  /**
   * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
   * string into null. Returns an invalid date for all other values.
   */
  deserialize(value) {
    let date;
    if (value instanceof Date) {
      date = this.createMoment(value);
    }
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      date = this.createMoment(value, moment.ISO_8601, this.parseStrict).locale(this.getLocale());
    }
    if (date && this.isValid(date)) {
      return date;
    }
    return super.deserialize(value);
  }
  /** Creates a Moment instance while respecting the current UTC settings. */
  createMoment(...args) {
    return this.options && this.options.useUtc ? moment.utc(...args) : moment(...args);
  }
  static ɵfac = function MomentDateTimeAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MomentDateTimeAdapter)(ɵɵinject(OWL_DATE_TIME_LOCALE, 8), ɵɵinject(OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MomentDateTimeAdapter,
    factory: _MomentDateTimeAdapter.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDateTimeAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_LOCALE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
    }]
  }], null);
})();
var OWL_MOMENT_DATE_TIME_FORMATS = {
  parseInput: "l LT",
  fullPickerInput: "l LT",
  datePickerInput: "l",
  timePickerInput: "LT",
  monthYearLabel: "MMM YYYY",
  dateA11yLabel: "LL",
  monthYearA11yLabel: "MMMM YYYY"
};
var MomentDateTimeModule = class _MomentDateTimeModule {
  static ɵfac = function MomentDateTimeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MomentDateTimeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MomentDateTimeModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [{
      provide: DateTimeAdapter,
      useClass: MomentDateTimeAdapter,
      deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MomentDateTimeModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateTimeAdapter,
        useClass: MomentDateTimeAdapter,
        deps: [OWL_DATE_TIME_LOCALE, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS]
      }]
    }]
  }], null, null);
})();
var OwlMomentDateTimeModule = class _OwlMomentDateTimeModule {
  static ɵfac = function OwlMomentDateTimeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwlMomentDateTimeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OwlMomentDateTimeModule,
    imports: [MomentDateTimeModule]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [{
      provide: OWL_DATE_TIME_FORMATS,
      useValue: OWL_MOMENT_DATE_TIME_FORMATS
    }],
    imports: [MomentDateTimeModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlMomentDateTimeModule, [{
    type: NgModule,
    args: [{
      imports: [MomentDateTimeModule],
      providers: [{
        provide: OWL_DATE_TIME_FORMATS,
        useValue: OWL_MOMENT_DATE_TIME_FORMATS
      }]
    }]
  }], null, null);
})();
export {
  MomentDateTimeAdapter,
  OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS,
  OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS_FACTORY,
  OwlMomentDateTimeModule
};
//# sourceMappingURL=@danielmoncada_angular-datetime-picker-moment-adapter.js.map
