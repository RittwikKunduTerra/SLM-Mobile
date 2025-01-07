import {
  NoopScrollStrategy,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule
} from "./chunk-ZO7K2FVZ.js";
import "./chunk-DGPPD623.js";
import "./chunk-4XBWK6TD.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  PortalInjector,
  PortalModule
} from "./chunk-EIAO2Z5M.js";
import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-T7WO5ZFD.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators
} from "./chunk-Y25F5ZV2.js";
import {
  A11yModule,
  DOWN_ARROW,
  END,
  ENTER,
  ESCAPE,
  FocusTrapFactory,
  HOME,
  LEFT_ARROW,
  PAGE_DOWN,
  PAGE_UP,
  Platform,
  PlatformModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  coerceArray,
  coerceBooleanProperty,
  coerceNumberProperty
} from "./chunk-2MWLDQON.js";
import {
  CommonModule,
  DOCUMENT,
  Location
} from "./chunk-PIVVRCI5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  Pipe,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  defineInjectable,
  forwardRef,
  inject
} from "./chunk-R45CJUP5.js";
import "./chunk-KKSL7W6X.js";
import {
  defer,
  merge
} from "./chunk-CXNAVVMS.js";
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  startWith,
  take
} from "./chunk-XQSEKRDZ.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-KBUIKKCC.js";

// node_modules/ng-pick-datetime/date-time/date-time-picker-intl.service.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OwlDateTimeIntl = function() {
  function OwlDateTimeIntl2() {
    this.changes = new Subject();
    this.upSecondLabel = "Add a second";
    this.downSecondLabel = "Minus a second";
    this.upMinuteLabel = "Add a minute";
    this.downMinuteLabel = "Minus a minute";
    this.upHourLabel = "Add a hour";
    this.downHourLabel = "Minus a hour";
    this.prevMonthLabel = "Previous month";
    this.nextMonthLabel = "Next month";
    this.prevYearLabel = "Previous year";
    this.nextYearLabel = "Next year";
    this.prevMultiYearLabel = "Previous 21 years";
    this.nextMultiYearLabel = "Next 21 years";
    this.switchToMonthViewLabel = "Change to month view";
    this.switchToMultiYearViewLabel = "Choose month and year";
    this.cancelBtnLabel = "Cancel";
    this.setBtnLabel = "Set";
    this.rangeFromLabel = "From";
    this.rangeToLabel = "To";
    this.hour12AMLabel = "AM";
    this.hour12PMLabel = "PM";
  }
  OwlDateTimeIntl2.ngInjectableDef = defineInjectable({
    factory: function OwlDateTimeIntl_Factory() {
      return new OwlDateTimeIntl2();
    },
    token: OwlDateTimeIntl2,
    providedIn: "root"
  });
  OwlDateTimeIntl2 = __decorate([Injectable({
    providedIn: "root"
  })], OwlDateTimeIntl2);
  return OwlDateTimeIntl2;
}();

// node_modules/ng-pick-datetime/date-time/adapter/date-time-adapter.class.js
var OWL_DATE_TIME_LOCALE = new InjectionToken("OWL_DATE_TIME_LOCALE", {
  providedIn: "root",
  factory: OWL_DATE_TIME_LOCALE_FACTORY
});
function OWL_DATE_TIME_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var OWL_DATE_TIME_LOCALE_PROVIDER = {
  provide: OWL_DATE_TIME_LOCALE,
  useExisting: LOCALE_ID
};
var DateTimeAdapter = function() {
  function DateTimeAdapter2() {
    this._localeChanges = new Subject();
    this.millisecondsInDay = 864e5;
    this.milliseondsInMinute = 6e4;
  }
  Object.defineProperty(DateTimeAdapter2.prototype, "localeChanges", {
    get: function() {
      return this._localeChanges;
    },
    enumerable: true,
    configurable: true
  });
  DateTimeAdapter2.prototype.compare = function(first, second) {
    if (!this.isValid(first) || !this.isValid(second)) {
      throw Error("JSNativeDate: Cannot compare invalid dates.");
    }
    var dateFirst = this.clone(first);
    var dateSecond = this.clone(second);
    var diff = this.getTime(dateFirst) - this.getTime(dateSecond);
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
    } else {
      return diff;
    }
  };
  DateTimeAdapter2.prototype.compareYear = function(first, second) {
    if (!this.isValid(first) || !this.isValid(second)) {
      throw Error("JSNativeDate: Cannot compare invalid dates.");
    }
    var yearLeft = this.getYear(first);
    var yearRight = this.getYear(second);
    var diff = yearLeft - yearRight;
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
    } else {
      return 0;
    }
  };
  DateTimeAdapter2.prototype.deserialize = function(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  };
  DateTimeAdapter2.prototype.setLocale = function(locale) {
    this.locale = locale;
    this._localeChanges.next();
  };
  DateTimeAdapter2.prototype.clampDate = function(date, min, max) {
    if (min && this.compare(date, min) < 0) {
      return min;
    }
    if (max && this.compare(date, max) > 0) {
      return max;
    }
    return date;
  };
  return DateTimeAdapter2;
}();

// node_modules/ng-pick-datetime/date-time/adapter/date-time-format.class.js
var OWL_DATE_TIME_FORMATS = new InjectionToken("OWL_DATE_TIME_FORMATS");

// node_modules/ng-pick-datetime/date-time/calendar.component.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var OwlCalendarComponent = function() {
  function OwlCalendarComponent2(elmRef, pickerIntl, ngZone, cdRef, dateTimeAdapter, dateTimeFormats) {
    var _this = this;
    this.elmRef = elmRef;
    this.pickerIntl = pickerIntl;
    this.ngZone = ngZone;
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this.firstDayOfWeek = 0;
    this._selecteds = [];
    this.startView = "month";
    this.pickerMomentChange = new EventEmitter();
    this.selectedChange = new EventEmitter();
    this.userSelection = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.dateFilterForViews = function(date) {
      return !!date && (!_this.dateFilter || _this.dateFilter(date)) && (!_this.minDate || _this.dateTimeAdapter.compare(date, _this.minDate) >= 0) && (!_this.maxDate || _this.dateTimeAdapter.compare(date, _this.maxDate) <= 0);
    };
    this.intlChangesSub = Subscription.EMPTY;
    this.moveFocusOnNextTick = false;
    this.intlChangesSub = this.pickerIntl.changes.subscribe(function() {
      _this.cdRef.markForCheck();
    });
  }
  Object.defineProperty(OwlCalendarComponent2.prototype, "minDate", {
    get: function() {
      return this._minDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      value = this.getValidDate(value);
      this._minDate = value ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "maxDate", {
    get: function() {
      return this._maxDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      value = this.getValidDate(value);
      this._maxDate = value ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "pickerMoment", {
    get: function() {
      return this._pickerMoment;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "selected", {
    get: function() {
      return this._selected;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._selected = this.getValidDate(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "selecteds", {
    get: function() {
      return this._selecteds;
    },
    set: function(values) {
      var _this = this;
      this._selecteds = values.map(function(v) {
        v = _this.dateTimeAdapter.deserialize(v);
        return _this.getValidDate(v);
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "periodButtonText", {
    get: function() {
      return this.isMonthView ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel) : this.dateTimeAdapter.getYearName(this.pickerMoment);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "periodButtonLabel", {
    get: function() {
      return this.isMonthView ? this.pickerIntl.switchToMultiYearViewLabel : this.pickerIntl.switchToMonthViewLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "prevButtonLabel", {
    get: function() {
      if (this._currentView === "month") {
        return this.pickerIntl.prevMonthLabel;
      } else if (this._currentView === "year") {
        return this.pickerIntl.prevYearLabel;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "nextButtonLabel", {
    get: function() {
      if (this._currentView === "month") {
        return this.pickerIntl.nextMonthLabel;
      } else if (this._currentView === "year") {
        return this.pickerIntl.nextYearLabel;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "currentView", {
    get: function() {
      return this._currentView;
    },
    set: function(view) {
      this._currentView = view;
      this.moveFocusOnNextTick = true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "isInSingleMode", {
    get: function() {
      return this.selectMode === "single";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "isInRangeMode", {
    get: function() {
      return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "showControlArrows", {
    get: function() {
      return this._currentView !== "multi-years";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "isMonthView", {
    get: function() {
      return this._currentView === "month";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarComponent2.prototype, "owlDTCalendarClass", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  OwlCalendarComponent2.prototype.ngOnInit = function() {
  };
  OwlCalendarComponent2.prototype.ngAfterContentInit = function() {
    this._currentView = this.startView;
  };
  OwlCalendarComponent2.prototype.ngAfterViewChecked = function() {
    if (this.moveFocusOnNextTick) {
      this.moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  };
  OwlCalendarComponent2.prototype.ngOnDestroy = function() {
    this.intlChangesSub.unsubscribe();
  };
  OwlCalendarComponent2.prototype.toggleViews = function() {
    this.currentView = this._currentView == "month" ? "multi-years" : "month";
  };
  OwlCalendarComponent2.prototype.previousClicked = function() {
    this.pickerMoment = this.isMonthView ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1) : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
    this.pickerMomentChange.emit(this.pickerMoment);
  };
  OwlCalendarComponent2.prototype.nextClicked = function() {
    this.pickerMoment = this.isMonthView ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1) : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
    this.pickerMomentChange.emit(this.pickerMoment);
  };
  OwlCalendarComponent2.prototype.dateSelected = function(date) {
    if (!this.dateFilterForViews(date)) {
      return;
    }
    this.selectedChange.emit(date);
  };
  OwlCalendarComponent2.prototype.goToDateInView = function(date, view) {
    this.handlePickerMomentChange(date);
    this.currentView = view;
    return;
  };
  OwlCalendarComponent2.prototype.handlePickerMomentChange = function(date) {
    this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
    this.pickerMomentChange.emit(this.pickerMoment);
    return;
  };
  OwlCalendarComponent2.prototype.userSelected = function() {
    this.userSelection.emit();
  };
  OwlCalendarComponent2.prototype.prevButtonEnabled = function() {
    return !this.minDate || !this.isSameView(this.pickerMoment, this.minDate);
  };
  OwlCalendarComponent2.prototype.nextButtonEnabled = function() {
    return !this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate);
  };
  OwlCalendarComponent2.prototype.focusActiveCell = function() {
    var _this = this;
    this.ngZone.runOutsideAngular(function() {
      _this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(function() {
        _this.elmRef.nativeElement.querySelector(".owl-dt-calendar-cell-active").focus();
      });
    });
  };
  OwlCalendarComponent2.prototype.selectYearInMultiYearView = function(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  };
  OwlCalendarComponent2.prototype.selectMonthInYearView = function(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  };
  OwlCalendarComponent2.prototype.isSameView = function(date1, date2) {
    if (this._currentView === "month") {
      return !!(date1 && date2 && this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2) && this.dateTimeAdapter.getMonth(date1) === this.dateTimeAdapter.getMonth(date2));
    } else if (this._currentView === "year") {
      return !!(date1 && date2 && this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2));
    } else {
      return false;
    }
  };
  OwlCalendarComponent2.prototype.getValidDate = function(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  };
  __decorate2([Input(), __metadata("design:type", Function)], OwlCalendarComponent2.prototype, "dateFilter", void 0);
  __decorate2([Input(), __metadata("design:type", Object)], OwlCalendarComponent2.prototype, "firstDayOfWeek", void 0);
  __decorate2([Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent2.prototype, "minDate", null);
  __decorate2([Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent2.prototype, "maxDate", null);
  __decorate2([Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent2.prototype, "pickerMoment", null);
  __decorate2([Input(), __metadata("design:type", String)], OwlCalendarComponent2.prototype, "selectMode", void 0);
  __decorate2([Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], OwlCalendarComponent2.prototype, "selected", null);
  __decorate2([Input(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], OwlCalendarComponent2.prototype, "selecteds", null);
  __decorate2([Input(), __metadata("design:type", String)], OwlCalendarComponent2.prototype, "startView", void 0);
  __decorate2([Input(), __metadata("design:type", Boolean)], OwlCalendarComponent2.prototype, "hideOtherMonths", void 0);
  __decorate2([Output(), __metadata("design:type", Object)], OwlCalendarComponent2.prototype, "pickerMomentChange", void 0);
  __decorate2([Output(), __metadata("design:type", Object)], OwlCalendarComponent2.prototype, "selectedChange", void 0);
  __decorate2([Output(), __metadata("design:type", Object)], OwlCalendarComponent2.prototype, "userSelection", void 0);
  __decorate2([Output(), __metadata("design:type", Object)], OwlCalendarComponent2.prototype, "yearSelected", void 0);
  __decorate2([Output(), __metadata("design:type", Object)], OwlCalendarComponent2.prototype, "monthSelected", void 0);
  __decorate2([HostBinding("class.owl-dt-calendar"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], OwlCalendarComponent2.prototype, "owlDTCalendarClass", null);
  OwlCalendarComponent2 = __decorate2([Component({
    selector: "owl-date-time-calendar",
    exportAs: "owlDateTimeCalendar",
    template: `<div class="owl-dt-calendar-control"><!-- focus when keyboard tab (http://kizu.ru/en/blog/keyboard-only-focus/#x) --> <button class="owl-dt-control owl-dt-control-button owl-dt-control-arrow-button" type="button" tabindex="0" [style.visibility]="showControlArrows? 'visible': 'hidden'" [disabled]="!prevButtonEnabled()" [attr.aria-label]="prevButtonLabel" (click)="previousClicked()"><span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1"><!-- <editor-fold desc="SVG Arrow Left"> --> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 250.738 250.738" style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve" width="100%" height="100%"><path style="fill-rule: evenodd; clip-rule: evenodd;" d="M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z"/></svg><!-- </editor-fold> --></span></button><div class="owl-dt-calendar-control-content"><button class="owl-dt-control owl-dt-control-button owl-dt-control-period-button" type="button" tabindex="0" [attr.aria-label]="periodButtonLabel" (click)="toggleViews()"><span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">{{periodButtonText}} <span class="owl-dt-control-button-arrow" [style.transform]="'rotate(' + (isMonthView? 0 : 180) +'deg)'"><!-- <editor-fold desc="SVG Arrow"> --> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50%" height="50%" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve"><g><path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/></g></svg><!-- </editor-fold> --></span></span></button></div><button class="owl-dt-control owl-dt-control-button owl-dt-control-arrow-button" type="button" tabindex="0" [style.visibility]="showControlArrows? 'visible': 'hidden'" [disabled]="!nextButtonEnabled()" [attr.aria-label]="nextButtonLabel" (click)="nextClicked()"><span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1"><!-- <editor-fold desc="SVG Arrow Right"> --> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250.738 250.738" style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0
                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545
                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681
                    C197.237,120.447,195.534,115.448,191.75,111.689z"/></svg><!-- </editor-fold> --></span></button></div><div class="owl-dt-calendar-main" cdkMonitorSubtreeFocus [ngSwitch]="currentView" tabindex="-1"><owl-date-time-month-view *ngSwitchCase="'month'" [pickerMoment]="pickerMoment" [firstDayOfWeek]="firstDayOfWeek" [selected]="selected" [selecteds]="selecteds" [selectMode]="selectMode" [minDate]="minDate" [maxDate]="maxDate" [dateFilter]="dateFilter" [hideOtherMonths]="hideOtherMonths" (pickerMomentChange)="handlePickerMomentChange($event)" (selectedChange)="dateSelected($event)" (userSelection)="userSelected()"></owl-date-time-month-view><owl-date-time-year-view *ngSwitchCase="'year'" [pickerMoment]="pickerMoment" [selected]="selected" [selecteds]="selecteds" [selectMode]="selectMode" [minDate]="minDate" [maxDate]="maxDate" [dateFilter]="dateFilter" (keyboardEnter)="focusActiveCell()" (pickerMomentChange)="handlePickerMomentChange($event)" (monthSelected)="selectMonthInYearView($event)" (change)="goToDateInView($event, 'month')"></owl-date-time-year-view><owl-date-time-multi-year-view *ngSwitchCase="'multi-years'" [pickerMoment]="pickerMoment" [selected]="selected" [selecteds]="selecteds" [selectMode]="selectMode" [minDate]="minDate" [maxDate]="maxDate" [dateFilter]="dateFilter" (keyboardEnter)="focusActiveCell()" (pickerMomentChange)="handlePickerMomentChange($event)" (yearSelected)="selectYearInMultiYearView($event)" (change)="goToDateInView($event, 'year')"></owl-date-time-multi-year-view></div>`,
    styles: [""],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
  }), __param(4, Optional()), __param(5, Optional()), __param(5, Inject(OWL_DATE_TIME_FORMATS)), __metadata("design:paramtypes", [ElementRef, OwlDateTimeIntl, NgZone, ChangeDetectorRef, DateTimeAdapter, Object])], OwlCalendarComponent2);
  return OwlCalendarComponent2;
}();

// node_modules/ng-pick-datetime/date-time/timer.component.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata2 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param2 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var OwlTimerComponent = function() {
  function OwlTimerComponent2(ngZone, elmRef, pickerIntl, cdRef, dateTimeAdapter) {
    this.ngZone = ngZone;
    this.elmRef = elmRef;
    this.pickerIntl = pickerIntl;
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.isPM = false;
    this.stepHour = 1;
    this.stepMinute = 1;
    this.stepSecond = 1;
    this.selectedChange = new EventEmitter();
  }
  Object.defineProperty(OwlTimerComponent2.prototype, "pickerMoment", {
    get: function() {
      return this._pickerMoment;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "minDateTime", {
    get: function() {
      return this._minDateTime;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._minDateTime = this.getValidDate(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "maxDateTime", {
    get: function() {
      return this._maxDateTime;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._maxDateTime = this.getValidDate(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "hourValue", {
    get: function() {
      return this.dateTimeAdapter.getHours(this.pickerMoment);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "hourBoxValue", {
    get: function() {
      var hours = this.hourValue;
      if (!this.hour12Timer) {
        return hours;
      } else {
        if (hours === 0) {
          hours = 12;
          this.isPM = false;
        } else if (hours > 0 && hours < 12) {
          this.isPM = false;
        } else if (hours === 12) {
          this.isPM = true;
        } else if (hours > 12 && hours < 24) {
          hours = hours - 12;
          this.isPM = true;
        }
        return hours;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "minuteValue", {
    get: function() {
      return this.dateTimeAdapter.getMinutes(this.pickerMoment);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "secondValue", {
    get: function() {
      return this.dateTimeAdapter.getSeconds(this.pickerMoment);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "upHourButtonLabel", {
    get: function() {
      return this.pickerIntl.upHourLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "downHourButtonLabel", {
    get: function() {
      return this.pickerIntl.downHourLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "upMinuteButtonLabel", {
    get: function() {
      return this.pickerIntl.upMinuteLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "downMinuteButtonLabel", {
    get: function() {
      return this.pickerIntl.downMinuteLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "upSecondButtonLabel", {
    get: function() {
      return this.pickerIntl.upSecondLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "downSecondButtonLabel", {
    get: function() {
      return this.pickerIntl.downSecondLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "hour12ButtonLabel", {
    get: function() {
      return this.isPM ? this.pickerIntl.hour12PMLabel : this.pickerIntl.hour12AMLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "owlDTTimerClass", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerComponent2.prototype, "owlDTTimeTabIndex", {
    get: function() {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  OwlTimerComponent2.prototype.ngOnInit = function() {
  };
  OwlTimerComponent2.prototype.focus = function() {
    var _this = this;
    this.ngZone.runOutsideAngular(function() {
      _this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(function() {
        _this.elmRef.nativeElement.focus();
      });
    });
  };
  OwlTimerComponent2.prototype.setHourValueViaInput = function(hours) {
    if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
      hours = hours + 12;
    } else if (this.hour12Timer && !this.isPM && hours === 12) {
      hours = 0;
    }
    this.setHourValue(hours);
  };
  OwlTimerComponent2.prototype.setHourValue = function(hours) {
    var m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
    this.selectedChange.emit(m);
    this.cdRef.markForCheck();
  };
  OwlTimerComponent2.prototype.setMinuteValue = function(minutes) {
    var m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
    this.selectedChange.emit(m);
    this.cdRef.markForCheck();
  };
  OwlTimerComponent2.prototype.setSecondValue = function(seconds) {
    var m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
    this.selectedChange.emit(m);
    this.cdRef.markForCheck();
  };
  OwlTimerComponent2.prototype.setMeridiem = function(event2) {
    this.isPM = !this.isPM;
    var hours = this.hourValue;
    if (this.isPM) {
      hours = hours + 12;
    } else {
      hours = hours - 12;
    }
    if (hours >= 0 && hours <= 23) {
      this.setHourValue(hours);
    }
    this.cdRef.markForCheck();
    event2.preventDefault();
  };
  OwlTimerComponent2.prototype.upHourEnabled = function() {
    return !this.maxDateTime || this.compareHours(this.stepHour, this.maxDateTime) < 1;
  };
  OwlTimerComponent2.prototype.downHourEnabled = function() {
    return !this.minDateTime || this.compareHours(-this.stepHour, this.minDateTime) > -1;
  };
  OwlTimerComponent2.prototype.upMinuteEnabled = function() {
    return !this.maxDateTime || this.compareMinutes(this.stepMinute, this.maxDateTime) < 1;
  };
  OwlTimerComponent2.prototype.downMinuteEnabled = function() {
    return !this.minDateTime || this.compareMinutes(-this.stepMinute, this.minDateTime) > -1;
  };
  OwlTimerComponent2.prototype.upSecondEnabled = function() {
    return !this.maxDateTime || this.compareSeconds(this.stepSecond, this.maxDateTime) < 1;
  };
  OwlTimerComponent2.prototype.downSecondEnabled = function() {
    return !this.minDateTime || this.compareSeconds(-this.stepSecond, this.minDateTime) > -1;
  };
  OwlTimerComponent2.prototype.compareHours = function(amount, comparedDate) {
    var hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
    var result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
    return this.dateTimeAdapter.compare(result, comparedDate);
  };
  OwlTimerComponent2.prototype.compareMinutes = function(amount, comparedDate) {
    var minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
    var result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
    return this.dateTimeAdapter.compare(result, comparedDate);
  };
  OwlTimerComponent2.prototype.compareSeconds = function(amount, comparedDate) {
    var seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
    var result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
    return this.dateTimeAdapter.compare(result, comparedDate);
  };
  OwlTimerComponent2.prototype.getValidDate = function(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  };
  __decorate3([Input(), __metadata2("design:type", Object), __metadata2("design:paramtypes", [Object])], OwlTimerComponent2.prototype, "pickerMoment", null);
  __decorate3([Input(), __metadata2("design:type", Object), __metadata2("design:paramtypes", [Object])], OwlTimerComponent2.prototype, "minDateTime", null);
  __decorate3([Input(), __metadata2("design:type", Object), __metadata2("design:paramtypes", [Object])], OwlTimerComponent2.prototype, "maxDateTime", null);
  __decorate3([Input(), __metadata2("design:type", Boolean)], OwlTimerComponent2.prototype, "showSecondsTimer", void 0);
  __decorate3([Input(), __metadata2("design:type", Boolean)], OwlTimerComponent2.prototype, "hour12Timer", void 0);
  __decorate3([Input(), __metadata2("design:type", Object)], OwlTimerComponent2.prototype, "stepHour", void 0);
  __decorate3([Input(), __metadata2("design:type", Object)], OwlTimerComponent2.prototype, "stepMinute", void 0);
  __decorate3([Input(), __metadata2("design:type", Object)], OwlTimerComponent2.prototype, "stepSecond", void 0);
  __decorate3([Output(), __metadata2("design:type", Object)], OwlTimerComponent2.prototype, "selectedChange", void 0);
  __decorate3([HostBinding("class.owl-dt-timer"), __metadata2("design:type", Boolean), __metadata2("design:paramtypes", [])], OwlTimerComponent2.prototype, "owlDTTimerClass", null);
  __decorate3([HostBinding("attr.tabindex"), __metadata2("design:type", Number), __metadata2("design:paramtypes", [])], OwlTimerComponent2.prototype, "owlDTTimeTabIndex", null);
  OwlTimerComponent2 = __decorate3([Component({
    exportAs: "owlDateTimeTimer",
    selector: "owl-date-time-timer",
    template: `<owl-date-time-timer-box [upBtnAriaLabel]="upHourButtonLabel" [downBtnAriaLabel]="downHourButtonLabel" [upBtnDisabled]="!upHourEnabled()" [downBtnDisabled]="!downHourEnabled()" [boxValue]="hourBoxValue" [value]="hourValue" [min]="0" [max]="23" [step]="stepHour" [inputLabel]="'Hour'" (inputChange)="setHourValueViaInput($event)" (valueChange)="setHourValue($event)"></owl-date-time-timer-box><owl-date-time-timer-box [showDivider]="true" [upBtnAriaLabel]="upMinuteButtonLabel" [downBtnAriaLabel]="downMinuteButtonLabel" [upBtnDisabled]="!upMinuteEnabled()" [downBtnDisabled]="!downMinuteEnabled()" [value]="minuteValue" [min]="0" [max]="59" [step]="stepMinute" [inputLabel]="'Minute'" (inputChange)="setMinuteValue($event)" (valueChange)="setMinuteValue($event)"></owl-date-time-timer-box><owl-date-time-timer-box *ngIf="showSecondsTimer" [showDivider]="true" [upBtnAriaLabel]="upSecondButtonLabel" [downBtnAriaLabel]="downSecondButtonLabel" [upBtnDisabled]="!upSecondEnabled()" [downBtnDisabled]="!downSecondEnabled()" [value]="secondValue" [min]="0" [max]="59" [step]="stepSecond" [inputLabel]="'Second'" (inputChange)="setSecondValue($event)" (valueChange)="setSecondValue($event)"></owl-date-time-timer-box><div *ngIf="hour12Timer" class="owl-dt-timer-hour12"><button class="owl-dt-control-button owl-dt-timer-hour12-box" type="button" tabindex="0" (click)="setMeridiem($event)"><span class="owl-dt-control-button-content" tabindex="-1">{{hour12ButtonLabel}}</span></button></div>`,
    styles: [""],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
  }), __param2(4, Optional()), __metadata2("design:paramtypes", [NgZone, ElementRef, OwlDateTimeIntl, ChangeDetectorRef, DateTimeAdapter])], OwlTimerComponent2);
  return OwlTimerComponent2;
}();

// node_modules/ng-pick-datetime/date-time/date-time-picker.animations.js
var owlDateTimePickerAnimations = {
  transformPicker: trigger("transformPicker", [state("void", style({
    opacity: 0,
    transform: "scale(1, 0)"
  })), state("enter", style({
    opacity: 1,
    transform: "scale(1, 1)"
  })), transition("void => enter", group([query("@fadeInPicker", animateChild(), {
    optional: true
  }), animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)")])), transition("enter => void", animate("100ms linear", style({
    opacity: 0
  })))]),
  fadeInPicker: trigger("fadeInPicker", [state("enter", style({
    opacity: 1
  })), state("void", style({
    opacity: 0
  })), transition("void => enter", animate("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))])
};

// node_modules/ng-pick-datetime/date-time/date-time-picker-container.component.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata3 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param3 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var OwlDateTimeContainerComponent = function() {
  function OwlDateTimeContainerComponent2(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
    this.cdRef = cdRef;
    this.elmRef = elmRef;
    this.pickerIntl = pickerIntl;
    this.dateTimeAdapter = dateTimeAdapter;
    this.activeSelectedIndex = 0;
    this.hidePicker$ = new Subject();
    this.confirmSelected$ = new Subject();
    this.pickerOpened$ = new Subject();
  }
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "hidePickerStream", {
    get: function() {
      return this.hidePicker$.asObservable();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "confirmSelectedStream", {
    get: function() {
      return this.confirmSelected$.asObservable();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "pickerOpenedStream", {
    get: function() {
      return this.pickerOpened$.asObservable();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "pickerMoment", {
    get: function() {
      return this._clamPickerMoment;
    },
    set: function(value) {
      if (value) {
        this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
      }
      this.cdRef.markForCheck();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "pickerType", {
    get: function() {
      return this.picker.pickerType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "cancelLabel", {
    get: function() {
      return this.pickerIntl.cancelBtnLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "setLabel", {
    get: function() {
      return this.pickerIntl.setBtnLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "fromLabel", {
    get: function() {
      return this.pickerIntl.rangeFromLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "toLabel", {
    get: function() {
      return this.pickerIntl.rangeToLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "fromFormattedValue", {
    get: function() {
      var value = this.picker.selecteds[0];
      return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "toFormattedValue", {
    get: function() {
      var value = this.picker.selecteds[1];
      return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "showControlButtons", {
    get: function() {
      return this.picker.pickerMode === "dialog" || this.picker.pickerType !== "calendar" && this.picker.pickerMode !== "inline";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "containerElm", {
    get: function() {
      return this.elmRef.nativeElement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "owlDTContainerClass", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "owlDTPopupContainerClass", {
    get: function() {
      return this.picker.pickerMode === "popup";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "owlDTDialogContainerClass", {
    get: function() {
      return this.picker.pickerMode === "dialog";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "owlDTInlineContainerClass", {
    get: function() {
      return this.picker.pickerMode === "inline";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "owlDTContainerDisabledClass", {
    get: function() {
      return this.picker.disabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "owlDTContainerId", {
    get: function() {
      return this.picker.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeContainerComponent2.prototype, "owlDTContainerAnimation", {
    get: function() {
      return this.picker.pickerMode === "inline" ? "" : "enter";
    },
    enumerable: true,
    configurable: true
  });
  OwlDateTimeContainerComponent2.prototype.ngOnInit = function() {
  };
  OwlDateTimeContainerComponent2.prototype.ngAfterContentInit = function() {
    this.initPicker();
  };
  OwlDateTimeContainerComponent2.prototype.ngAfterViewInit = function() {
    this.focusPicker();
  };
  OwlDateTimeContainerComponent2.prototype.handleContainerAnimationDone = function(event2) {
    var toState = event2.toState;
    if (toState === "enter") {
      this.pickerOpened$.next();
    }
  };
  OwlDateTimeContainerComponent2.prototype.dateSelected = function(date) {
    var result;
    if (this.picker.isInSingleMode) {
      result = this.dateSelectedInSingleMode(date);
      if (result) {
        this.pickerMoment = result;
        this.picker.select(result);
      } else {
        if (this.pickerType === "calendar") {
          this.hidePicker$.next(null);
        }
      }
      return;
    }
    if (this.picker.isInRangeMode) {
      result = this.dateSelectedInRangeMode(date);
      if (result) {
        this.pickerMoment = result[this.activeSelectedIndex];
        this.picker.select(result);
      }
    }
  };
  OwlDateTimeContainerComponent2.prototype.timeSelected = function(time) {
    this.pickerMoment = this.dateTimeAdapter.clone(time);
    if (!this.picker.dateTimeChecker(this.pickerMoment)) {
      return;
    }
    if (this.picker.isInSingleMode) {
      this.picker.select(this.pickerMoment);
      return;
    }
    if (this.picker.isInRangeMode) {
      var selecteds = this.picker.selecteds.slice();
      if (this.activeSelectedIndex === 0 && selecteds[1] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[1]) === 1 || this.activeSelectedIndex === 1 && selecteds[0] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[0]) === -1) {
        selecteds[0] = this.pickerMoment;
        selecteds[1] = this.pickerMoment;
      } else {
        selecteds[this.activeSelectedIndex] = this.pickerMoment;
      }
      this.picker.select(selecteds);
    }
  };
  OwlDateTimeContainerComponent2.prototype.onCancelClicked = function(event2) {
    this.hidePicker$.next(null);
    event2.preventDefault();
    return;
  };
  OwlDateTimeContainerComponent2.prototype.onSetClicked = function(event2) {
    if (!this.picker.dateTimeChecker(this.pickerMoment)) {
      this.hidePicker$.next(null);
      event2.preventDefault();
      return;
    }
    this.confirmSelected$.next(event2);
    event2.preventDefault();
    return;
  };
  OwlDateTimeContainerComponent2.prototype.handleClickOnInfoGroup = function(event2, index) {
    this.setActiveSelectedIndex(index);
    event2.preventDefault();
    event2.stopPropagation();
  };
  OwlDateTimeContainerComponent2.prototype.handleKeydownOnInfoGroup = function(event2, next, index) {
    switch (event2.keyCode) {
      case DOWN_ARROW:
      case RIGHT_ARROW:
      case UP_ARROW:
      case LEFT_ARROW:
        next.focus();
        this.setActiveSelectedIndex(index === 0 ? 1 : 0);
        event2.preventDefault();
        event2.stopPropagation();
        break;
      case SPACE:
        this.setActiveSelectedIndex(index);
        event2.preventDefault();
        event2.stopPropagation();
        break;
      default:
        return;
    }
  };
  OwlDateTimeContainerComponent2.prototype.setActiveSelectedIndex = function(index) {
    if (this.picker.selectMode === "range" && this.activeSelectedIndex !== index) {
      this.activeSelectedIndex = index;
      var selected = this.picker.selecteds[this.activeSelectedIndex];
      if (this.picker.selecteds && selected) {
        this.pickerMoment = this.dateTimeAdapter.clone(selected);
      }
    }
    return;
  };
  OwlDateTimeContainerComponent2.prototype.initPicker = function() {
    this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
    this.activeSelectedIndex = this.picker.selectMode === "rangeTo" ? 1 : 0;
  };
  OwlDateTimeContainerComponent2.prototype.dateSelectedInSingleMode = function(date) {
    if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
      return null;
    }
    return this.updateAndCheckCalendarDate(date);
  };
  OwlDateTimeContainerComponent2.prototype.dateSelectedInRangeMode = function(date) {
    var from = this.picker.selecteds[0];
    var to = this.picker.selecteds[1];
    var result = this.updateAndCheckCalendarDate(date);
    if (!result) {
      return null;
    }
    if (this.picker.selectMode === "range") {
      if (this.picker.selecteds && this.picker.selecteds.length && !to && from && this.dateTimeAdapter.differenceInCalendarDays(result, from) >= 0) {
        to = result;
        this.activeSelectedIndex = 1;
      } else {
        from = result;
        to = null;
        this.activeSelectedIndex = 0;
      }
    } else if (this.picker.selectMode === "rangeFrom") {
      from = result;
      if (to && this.dateTimeAdapter.compare(from, to) > 0) {
        to = null;
      }
    } else if (this.picker.selectMode === "rangeTo") {
      to = result;
      if (from && this.dateTimeAdapter.compare(from, to) > 0) {
        from = null;
      }
    }
    return [from, to];
  };
  OwlDateTimeContainerComponent2.prototype.updateAndCheckCalendarDate = function(date) {
    var result;
    if (this.picker.pickerType === "both") {
      result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(date), this.dateTimeAdapter.getMonth(date), this.dateTimeAdapter.getDate(date), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
      result = this.dateTimeAdapter.clampDate(result, this.picker.minDateTime, this.picker.maxDateTime);
    } else {
      result = this.dateTimeAdapter.clone(date);
    }
    return this.picker.dateTimeChecker(result) ? result : null;
  };
  OwlDateTimeContainerComponent2.prototype.focusPicker = function() {
    if (this.picker.pickerMode === "inline") {
      return;
    }
    if (this.calendar) {
      this.calendar.focusActiveCell();
    } else if (this.timer) {
      this.timer.focus();
    }
  };
  __decorate4([ViewChild(OwlCalendarComponent), __metadata3("design:type", OwlCalendarComponent)], OwlDateTimeContainerComponent2.prototype, "calendar", void 0);
  __decorate4([ViewChild(OwlTimerComponent), __metadata3("design:type", OwlTimerComponent)], OwlDateTimeContainerComponent2.prototype, "timer", void 0);
  __decorate4([HostBinding("class.owl-dt-container"), __metadata3("design:type", Boolean), __metadata3("design:paramtypes", [])], OwlDateTimeContainerComponent2.prototype, "owlDTContainerClass", null);
  __decorate4([HostBinding("class.owl-dt-popup-container"), __metadata3("design:type", Boolean), __metadata3("design:paramtypes", [])], OwlDateTimeContainerComponent2.prototype, "owlDTPopupContainerClass", null);
  __decorate4([HostBinding("class.owl-dt-dialog-container"), __metadata3("design:type", Boolean), __metadata3("design:paramtypes", [])], OwlDateTimeContainerComponent2.prototype, "owlDTDialogContainerClass", null);
  __decorate4([HostBinding("class.owl-dt-inline-container"), __metadata3("design:type", Boolean), __metadata3("design:paramtypes", [])], OwlDateTimeContainerComponent2.prototype, "owlDTInlineContainerClass", null);
  __decorate4([HostBinding("class.owl-dt-container-disabled"), __metadata3("design:type", Boolean), __metadata3("design:paramtypes", [])], OwlDateTimeContainerComponent2.prototype, "owlDTContainerDisabledClass", null);
  __decorate4([HostBinding("attr.id"), __metadata3("design:type", String), __metadata3("design:paramtypes", [])], OwlDateTimeContainerComponent2.prototype, "owlDTContainerId", null);
  __decorate4([HostBinding("@transformPicker"), __metadata3("design:type", Object), __metadata3("design:paramtypes", [])], OwlDateTimeContainerComponent2.prototype, "owlDTContainerAnimation", null);
  __decorate4([HostListener("@transformPicker.done", ["$event"]), __metadata3("design:type", Function), __metadata3("design:paramtypes", [Object]), __metadata3("design:returntype", void 0)], OwlDateTimeContainerComponent2.prototype, "handleContainerAnimationDone", null);
  OwlDateTimeContainerComponent2 = __decorate4([Component({
    exportAs: "owlDateTimeContainer",
    selector: "owl-date-time-container",
    template: `<div [cdkTrapFocus]="picker.pickerMode !== 'inline'" [@fadeInPicker]="picker.pickerMode === 'inline'? '' : 'enter'" class="owl-dt-container-inner"><owl-date-time-calendar *ngIf="pickerType === 'both' || pickerType === 'calendar'" class="owl-dt-container-row" [firstDayOfWeek]="picker.firstDayOfWeek" [(pickerMoment)]="pickerMoment" [selected]="picker.selected" [selecteds]="picker.selecteds" [selectMode]="picker.selectMode" [minDate]="picker.minDateTime" [maxDate]="picker.maxDateTime" [dateFilter]="picker.dateTimeFilter" [startView]="picker.startView" [hideOtherMonths]="picker.hideOtherMonths" (yearSelected)="picker.selectYear($event)" (monthSelected)="picker.selectMonth($event)" (selectedChange)="dateSelected($event)"></owl-date-time-calendar><owl-date-time-timer *ngIf="pickerType === 'both' || pickerType === 'timer'" class="owl-dt-container-row" [pickerMoment]="pickerMoment" [minDateTime]="picker.minDateTime" [maxDateTime]="picker.maxDateTime" [showSecondsTimer]="picker.showSecondsTimer" [hour12Timer]="picker.hour12Timer" [stepHour]="picker.stepHour" [stepMinute]="picker.stepMinute" [stepSecond]="picker.stepSecond" (selectedChange)="timeSelected($event)"></owl-date-time-timer><div *ngIf="picker.isInRangeMode" role="radiogroup" class="owl-dt-container-info owl-dt-container-row"><div role="radio" [tabindex]="activeSelectedIndex === 0 ? 0 : -1" [attr.aria-checked]="activeSelectedIndex === 0" class="owl-dt-control owl-dt-container-range owl-dt-container-from" [ngClass]="{'owl-dt-container-info-active': activeSelectedIndex === 0}" (click)="handleClickOnInfoGroup($event, 0)" (keydown)="handleKeydownOnInfoGroup($event, to, 0)" #from><span class="owl-dt-control-content owl-dt-container-range-content" tabindex="-1"><span class="owl-dt-container-info-label">{{fromLabel}}:</span> <span class="owl-dt-container-info-value">{{fromFormattedValue}}</span></span></div><div role="radio" [tabindex]="activeSelectedIndex === 1 ? 0 : -1" [attr.aria-checked]="activeSelectedIndex === 1" class="owl-dt-control owl-dt-container-range owl-dt-container-to" [ngClass]="{'owl-dt-container-info-active': activeSelectedIndex === 1}" (click)="handleClickOnInfoGroup($event, 1)" (keydown)="handleKeydownOnInfoGroup($event, from, 1)" #to><span class="owl-dt-control-content owl-dt-container-range-content" tabindex="-1"><span class="owl-dt-container-info-label">{{toLabel}}:</span> <span class="owl-dt-container-info-value">{{toFormattedValue}}</span></span></div></div><div *ngIf="showControlButtons" class="owl-dt-container-buttons owl-dt-container-row"><button class="owl-dt-control owl-dt-control-button owl-dt-container-control-button" type="button" tabindex="0" (click)="onCancelClicked($event)"><span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">{{cancelLabel}}</span></button> <button class="owl-dt-control owl-dt-control-button owl-dt-container-control-button" type="button" tabindex="0" (click)="onSetClicked($event)"><span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">{{setLabel}}</span></button></div></div>`,
    styles: [""],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    animations: [owlDateTimePickerAnimations.transformPicker, owlDateTimePickerAnimations.fadeInPicker]
  }), __param3(3, Optional()), __metadata3("design:paramtypes", [ChangeDetectorRef, ElementRef, OwlDateTimeIntl, DateTimeAdapter])], OwlDateTimeContainerComponent2);
  return OwlDateTimeContainerComponent2;
}();

// node_modules/ng-pick-datetime/date-time/date-time.class.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata4 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param4 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var nextUniqueId = 0;
var OwlDateTime = function() {
  function OwlDateTime2(dateTimeAdapter, dateTimeFormats) {
    var _this = this;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this._showSecondsTimer = false;
    this._hour12Timer = false;
    this.startView = "month";
    this._stepHour = 1;
    this._stepMinute = 1;
    this._stepSecond = 1;
    this._firstDayOfWeek = 0;
    this._hideOtherMonths = false;
    this.dateTimeChecker = function(dateTime) {
      return !!dateTime && (!_this.dateTimeFilter || _this.dateTimeFilter(dateTime)) && (!_this.minDateTime || _this.dateTimeAdapter.compare(dateTime, _this.minDateTime) >= 0) && (!_this.maxDateTime || _this.dateTimeAdapter.compare(dateTime, _this.maxDateTime) <= 0);
    };
    if (!this.dateTimeAdapter) {
      throw Error("OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.");
    }
    if (!this.dateTimeFormats) {
      throw Error("OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.");
    }
    this._id = "owl-dt-picker-" + nextUniqueId++;
  }
  Object.defineProperty(OwlDateTime2.prototype, "showSecondsTimer", {
    get: function() {
      return this._showSecondsTimer;
    },
    set: function(val) {
      this._showSecondsTimer = coerceBooleanProperty(val);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "hour12Timer", {
    get: function() {
      return this._hour12Timer;
    },
    set: function(val) {
      this._hour12Timer = coerceBooleanProperty(val);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "stepHour", {
    get: function() {
      return this._stepHour;
    },
    set: function(val) {
      this._stepHour = coerceNumberProperty(val, 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "stepMinute", {
    get: function() {
      return this._stepMinute;
    },
    set: function(val) {
      this._stepMinute = coerceNumberProperty(val, 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "stepSecond", {
    get: function() {
      return this._stepSecond;
    },
    set: function(val) {
      this._stepSecond = coerceNumberProperty(val, 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "firstDayOfWeek", {
    get: function() {
      return this._firstDayOfWeek;
    },
    set: function(value) {
      value = coerceNumberProperty(value, 0);
      if (value > 6 || value < 0) {
        this._firstDayOfWeek = 0;
      } else {
        this._firstDayOfWeek = value;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "hideOtherMonths", {
    get: function() {
      return this._hideOtherMonths;
    },
    set: function(val) {
      this._hideOtherMonths = coerceBooleanProperty(val);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "id", {
    get: function() {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "formatString", {
    get: function() {
      return this.pickerType === "both" ? this.dateTimeFormats.fullPickerInput : this.pickerType === "calendar" ? this.dateTimeFormats.datePickerInput : this.dateTimeFormats.timePickerInput;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTime2.prototype, "disabled", {
    get: function() {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  OwlDateTime2.prototype.getValidDate = function(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  };
  __decorate5([Input(), __metadata4("design:type", Boolean), __metadata4("design:paramtypes", [Boolean])], OwlDateTime2.prototype, "showSecondsTimer", null);
  __decorate5([Input(), __metadata4("design:type", Boolean), __metadata4("design:paramtypes", [Boolean])], OwlDateTime2.prototype, "hour12Timer", null);
  __decorate5([Input(), __metadata4("design:type", String)], OwlDateTime2.prototype, "startView", void 0);
  __decorate5([Input(), __metadata4("design:type", Number), __metadata4("design:paramtypes", [Number])], OwlDateTime2.prototype, "stepHour", null);
  __decorate5([Input(), __metadata4("design:type", Number), __metadata4("design:paramtypes", [Number])], OwlDateTime2.prototype, "stepMinute", null);
  __decorate5([Input(), __metadata4("design:type", Number), __metadata4("design:paramtypes", [Number])], OwlDateTime2.prototype, "stepSecond", null);
  __decorate5([Input(), __metadata4("design:type", Number), __metadata4("design:paramtypes", [Number])], OwlDateTime2.prototype, "firstDayOfWeek", null);
  __decorate5([Input(), __metadata4("design:type", Boolean), __metadata4("design:paramtypes", [Boolean])], OwlDateTime2.prototype, "hideOtherMonths", null);
  OwlDateTime2 = __decorate5([__param4(0, Optional()), __param4(1, Optional()), __param4(1, Inject(OWL_DATE_TIME_FORMATS)), __metadata4("design:paramtypes", [DateTimeAdapter, Object])], OwlDateTime2);
  return OwlDateTime2;
}();

// node_modules/ng-pick-datetime/dialog/dialog-config.class.js
var uniqueId = 0;
var OwlDialogConfig = /* @__PURE__ */ function() {
  function OwlDialogConfig2() {
    this.ariaDescribedBy = null;
    this.autoFocus = true;
    this.hasBackdrop = true;
    this.data = null;
    this.disableClose = false;
    this.role = "dialog";
    this.paneClass = "";
    this.event = null;
    this.backdropClass = "";
    this.closeOnNavigation = true;
    this.width = "";
    this.height = "";
    this.maxWidth = "85vw";
    this.scrollStrategy = new NoopScrollStrategy();
    this.id = "owl-dialog-" + uniqueId++;
  }
  return OwlDialogConfig2;
}();

// node_modules/ng-pick-datetime/dialog/dialog-ref.class.js
var OwlDialogRef = function() {
  function OwlDialogRef2(overlayRef, container, id, location) {
    var _this = this;
    this.overlayRef = overlayRef;
    this.container = container;
    this.id = id;
    this._beforeClose$ = new Subject();
    this._afterOpen$ = new Subject();
    this._afterClosed$ = new Subject();
    this.locationChanged = Subscription.EMPTY;
    this.disableClose = this.container.config.disableClose;
    this.container.animationStateChanged.pipe(filter(function(event2) {
      return event2.phaseName === "done" && event2.toState === "enter";
    }), take(1)).subscribe(function() {
      _this._afterOpen$.next();
      _this._afterOpen$.complete();
    });
    this.container.animationStateChanged.pipe(filter(function(event2) {
      return event2.phaseName === "done" && event2.toState === "exit";
    }), take(1)).subscribe(function() {
      _this.overlayRef.dispose();
      _this.locationChanged.unsubscribe();
      _this._afterClosed$.next(_this.result);
      _this._afterClosed$.complete();
      _this.componentInstance = null;
    });
    this.overlayRef.keydownEvents().pipe(filter(function(event2) {
      return event2.keyCode === ESCAPE && !_this.disableClose;
    })).subscribe(function() {
      return _this.close();
    });
    if (location) {
      this.locationChanged = location.subscribe(function() {
        if (_this.container.config.closeOnNavigation) {
          _this.close();
        }
      });
    }
  }
  OwlDialogRef2.prototype.close = function(dialogResult) {
    var _this = this;
    this.result = dialogResult;
    this.container.animationStateChanged.pipe(filter(function(event2) {
      return event2.phaseName === "start";
    }), take(1)).subscribe(function() {
      _this._beforeClose$.next(dialogResult);
      _this._beforeClose$.complete();
      _this.overlayRef.detachBackdrop();
    });
    this.container.startExitAnimation();
  };
  OwlDialogRef2.prototype.backdropClick = function() {
    return this.overlayRef.backdropClick();
  };
  OwlDialogRef2.prototype.keydownEvents = function() {
    return this.overlayRef.keydownEvents();
  };
  OwlDialogRef2.prototype.updatePosition = function(position) {
    var strategy = this.getPositionStrategy();
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this.overlayRef.updatePosition();
    return this;
  };
  OwlDialogRef2.prototype.updateSize = function(width, height) {
    if (width === void 0) {
      width = "auto";
    }
    if (height === void 0) {
      height = "auto";
    }
    this.getPositionStrategy().width(width).height(height);
    this.overlayRef.updatePosition();
    return this;
  };
  OwlDialogRef2.prototype.isAnimating = function() {
    return this.container.isAnimating;
  };
  OwlDialogRef2.prototype.afterOpen = function() {
    return this._afterOpen$.asObservable();
  };
  OwlDialogRef2.prototype.beforeClose = function() {
    return this._beforeClose$.asObservable();
  };
  OwlDialogRef2.prototype.afterClosed = function() {
    return this._afterClosed$.asObservable();
  };
  OwlDialogRef2.prototype.getPositionStrategy = function() {
    return this.overlayRef.getConfig().positionStrategy;
  };
  return OwlDialogRef2;
}();

// node_modules/ng-pick-datetime/dialog/dialog-container.component.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata5 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param5 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var zoomFadeIn = {
  opacity: 0,
  transform: "translateX({{ x }}) translateY({{ y }}) scale({{scale}})"
};
var zoomFadeInFrom = {
  opacity: 0,
  transform: "translateX({{ x }}) translateY({{ y }}) scale({{scale}})",
  transformOrigin: "{{ ox }} {{ oy }}"
};
var OwlDialogContainerComponent = function(_super) {
  __extends(OwlDialogContainerComponent2, _super);
  function OwlDialogContainerComponent2(changeDetector, elementRef, focusTrapFactory, document) {
    var _this = _super.call(this) || this;
    _this.changeDetector = changeDetector;
    _this.elementRef = elementRef;
    _this.focusTrapFactory = focusTrapFactory;
    _this.document = document;
    _this.ariaLabelledBy = null;
    _this.animationStateChanged = new EventEmitter();
    _this.isAnimating = false;
    _this.state = "enter";
    _this.params = {
      x: "0px",
      y: "0px",
      ox: "50%",
      oy: "50%",
      scale: 0
    };
    _this.elementFocusedBeforeDialogWasOpened = null;
    return _this;
  }
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "config", {
    get: function() {
      return this._config;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "owlDialogContainerClass", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "owlDialogContainerTabIndex", {
    get: function() {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "owlDialogContainerId", {
    get: function() {
      return this._config.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "owlDialogContainerRole", {
    get: function() {
      return this._config.role || null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "owlDialogContainerAriaLabelledby", {
    get: function() {
      return this.ariaLabelledBy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "owlDialogContainerAriaDescribedby", {
    get: function() {
      return this._config.ariaDescribedBy || null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogContainerComponent2.prototype, "owlDialogContainerAnimation", {
    get: function() {
      return {
        value: this.state,
        params: this.params
      };
    },
    enumerable: true,
    configurable: true
  });
  OwlDialogContainerComponent2.prototype.ngOnInit = function() {
  };
  OwlDialogContainerComponent2.prototype.attachComponentPortal = function(portal) {
    if (this.portalOutlet.hasAttached()) {
      throw Error("Attempting to attach dialog content after content is already attached");
    }
    this.savePreviouslyFocusedElement();
    return this.portalOutlet.attachComponentPortal(portal);
  };
  OwlDialogContainerComponent2.prototype.attachTemplatePortal = function(portal) {
    throw new Error("Method not implemented.");
  };
  OwlDialogContainerComponent2.prototype.setConfig = function(config) {
    this._config = config;
    if (config.event) {
      this.calculateZoomOrigin(event);
    }
  };
  OwlDialogContainerComponent2.prototype.onAnimationStart = function(event2) {
    this.isAnimating = true;
    this.animationStateChanged.emit(event2);
  };
  OwlDialogContainerComponent2.prototype.onAnimationDone = function(event2) {
    if (event2.toState === "enter") {
      this.trapFocus();
    } else if (event2.toState === "exit") {
      this.restoreFocus();
    }
    this.animationStateChanged.emit(event2);
    this.isAnimating = false;
  };
  OwlDialogContainerComponent2.prototype.startExitAnimation = function() {
    this.state = "exit";
    this.changeDetector.markForCheck();
  };
  OwlDialogContainerComponent2.prototype.calculateZoomOrigin = function(event2) {
    if (!event2) {
      return;
    }
    var clientX = event2.clientX;
    var clientY = event2.clientY;
    var wh = window.innerWidth / 2;
    var hh = window.innerHeight / 2;
    var x = clientX - wh;
    var y = clientY - hh;
    var ox = clientX / window.innerWidth;
    var oy = clientY / window.innerHeight;
    this.params.x = x + "px";
    this.params.y = y + "px";
    this.params.ox = ox * 100 + "%";
    this.params.oy = oy * 100 + "%";
    this.params.scale = 0;
    return;
  };
  OwlDialogContainerComponent2.prototype.savePreviouslyFocusedElement = function() {
    var _this = this;
    if (this.document) {
      this.elementFocusedBeforeDialogWasOpened = this.document.activeElement;
      Promise.resolve().then(function() {
        return _this.elementRef.nativeElement.focus();
      });
    }
  };
  OwlDialogContainerComponent2.prototype.trapFocus = function() {
    if (!this.focusTrap) {
      this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
    }
    if (this._config.autoFocus) {
      this.focusTrap.focusInitialElementWhenReady();
    }
  };
  OwlDialogContainerComponent2.prototype.restoreFocus = function() {
    var toFocus = this.elementFocusedBeforeDialogWasOpened;
    if (toFocus && typeof toFocus.focus === "function") {
      toFocus.focus();
    }
    if (this.focusTrap) {
      this.focusTrap.destroy();
    }
  };
  __decorate6([ViewChild(CdkPortalOutlet), __metadata5("design:type", CdkPortalOutlet)], OwlDialogContainerComponent2.prototype, "portalOutlet", void 0);
  __decorate6([HostBinding("class.owl-dialog-container"), __metadata5("design:type", Boolean), __metadata5("design:paramtypes", [])], OwlDialogContainerComponent2.prototype, "owlDialogContainerClass", null);
  __decorate6([HostBinding("attr.tabindex"), __metadata5("design:type", Number), __metadata5("design:paramtypes", [])], OwlDialogContainerComponent2.prototype, "owlDialogContainerTabIndex", null);
  __decorate6([HostBinding("attr.id"), __metadata5("design:type", String), __metadata5("design:paramtypes", [])], OwlDialogContainerComponent2.prototype, "owlDialogContainerId", null);
  __decorate6([HostBinding("attr.role"), __metadata5("design:type", String), __metadata5("design:paramtypes", [])], OwlDialogContainerComponent2.prototype, "owlDialogContainerRole", null);
  __decorate6([HostBinding("attr.aria-labelledby"), __metadata5("design:type", String), __metadata5("design:paramtypes", [])], OwlDialogContainerComponent2.prototype, "owlDialogContainerAriaLabelledby", null);
  __decorate6([HostBinding("attr.aria-describedby"), __metadata5("design:type", String), __metadata5("design:paramtypes", [])], OwlDialogContainerComponent2.prototype, "owlDialogContainerAriaDescribedby", null);
  __decorate6([HostBinding("@slideModal"), __metadata5("design:type", Object), __metadata5("design:paramtypes", [])], OwlDialogContainerComponent2.prototype, "owlDialogContainerAnimation", null);
  __decorate6([HostListener("@slideModal.start", ["$event"]), __metadata5("design:type", Function), __metadata5("design:paramtypes", [Object]), __metadata5("design:returntype", void 0)], OwlDialogContainerComponent2.prototype, "onAnimationStart", null);
  __decorate6([HostListener("@slideModal.done", ["$event"]), __metadata5("design:type", Function), __metadata5("design:paramtypes", [Object]), __metadata5("design:returntype", void 0)], OwlDialogContainerComponent2.prototype, "onAnimationDone", null);
  OwlDialogContainerComponent2 = __decorate6([Component({
    selector: "owl-dialog-container",
    template: "<ng-template cdkPortalOutlet></ng-template>",
    animations: [trigger("slideModal", [transition("void => enter", [style(zoomFadeInFrom), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)", style("*")), animate("150ms", keyframes([style({
      transform: "scale(1)",
      offset: 0
    }), style({
      transform: "scale(1.05)",
      offset: 0.3
    }), style({
      transform: "scale(.95)",
      offset: 0.8
    }), style({
      transform: "scale(1)",
      offset: 1
    })])), animateChild()], {
      params: {
        x: "0px",
        y: "0px",
        ox: "50%",
        oy: "50%",
        scale: 1
      }
    }), transition("enter => exit", [animateChild(), animate(200, style(zoomFadeIn))], {
      params: {
        x: "0px",
        y: "0px",
        ox: "50%",
        oy: "50%"
      }
    })])]
  }), __param5(3, Optional()), __param5(3, Inject(DOCUMENT)), __metadata5("design:paramtypes", [ChangeDetectorRef, ElementRef, FocusTrapFactory, Object])], OwlDialogContainerComponent2);
  return OwlDialogContainerComponent2;
}(BasePortalOutlet);

// node_modules/ng-pick-datetime/utils/object.utils.js
function extendObject(dest) {
  var sources = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }
  if (dest == null) {
    throw TypeError("Cannot convert undefined or null to object");
  }
  for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
    var source = sources_1[_a];
    if (source != null) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
  }
  return dest;
}

// node_modules/ng-pick-datetime/dialog/dialog.service.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata6 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param6 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var OWL_DIALOG_DATA = new InjectionToken("OwlDialogData");
var OWL_DIALOG_SCROLL_STRATEGY = new InjectionToken("owl-dialog-scroll-strategy");
function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function() {
    return overlay.scrollStrategies.block();
  };
}
var OWL_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: OWL_DIALOG_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OWL_DIALOG_DEFAULT_OPTIONS = new InjectionToken("owl-dialog-default-options");
var OwlDialogService = function() {
  function OwlDialogService2(overlay, injector, location, scrollStrategy, defaultOptions, parentDialog, overlayContainer) {
    var _this = this;
    this.overlay = overlay;
    this.injector = injector;
    this.location = location;
    this.scrollStrategy = scrollStrategy;
    this.defaultOptions = defaultOptions;
    this.parentDialog = parentDialog;
    this.overlayContainer = overlayContainer;
    this.ariaHiddenElements = /* @__PURE__ */ new Map();
    this._openDialogsAtThisLevel = [];
    this._afterOpenAtThisLevel = new Subject();
    this._afterAllClosedAtThisLevel = new Subject();
    this.afterAllClosed = defer(function() {
      return _this._openDialogsAtThisLevel.length ? _this._afterAllClosed : _this._afterAllClosed.pipe(startWith(void 0));
    });
    if (!parentDialog && location) {
      location.subscribe(function() {
        return _this.closeAll();
      });
    }
  }
  Object.defineProperty(OwlDialogService2.prototype, "openDialogs", {
    get: function() {
      return this.parentDialog ? this.parentDialog.openDialogs : this._openDialogsAtThisLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogService2.prototype, "afterOpen", {
    get: function() {
      return this.parentDialog ? this.parentDialog.afterOpen : this._afterOpenAtThisLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDialogService2.prototype, "_afterAllClosed", {
    get: function() {
      var parent = this.parentDialog;
      return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
    },
    enumerable: true,
    configurable: true
  });
  OwlDialogService2.prototype.open = function(componentOrTemplateRef, config) {
    var _this = this;
    config = applyConfigDefaults(config, this.defaultOptions);
    if (config.id && this.getDialogById(config.id)) {
      throw Error('Dialog with id "' + config.id + '" exists already. The dialog id must be unique.');
    }
    var overlayRef = this.createOverlay(config);
    var dialogContainer = this.attachDialogContainer(overlayRef, config);
    var dialogRef = this.attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
    if (!this.openDialogs.length) {
      this.hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.afterClosed().subscribe(function() {
      return _this.removeOpenDialog(dialogRef);
    });
    this.afterOpen.next(dialogRef);
    return dialogRef;
  };
  OwlDialogService2.prototype.closeAll = function() {
    var i = this.openDialogs.length;
    while (i--) {
      this.openDialogs[i].close();
    }
  };
  OwlDialogService2.prototype.getDialogById = function(id) {
    return this.openDialogs.find(function(dialog) {
      return dialog.id === id;
    });
  };
  OwlDialogService2.prototype.attachDialogContent = function(componentOrTemplateRef, dialogContainer, overlayRef, config) {
    var dialogRef = new OwlDialogRef(overlayRef, dialogContainer, config.id, this.location);
    if (config.hasBackdrop) {
      overlayRef.backdropClick().subscribe(function() {
        if (!dialogRef.disableClose) {
          dialogRef.close();
        }
      });
    }
    if (componentOrTemplateRef instanceof TemplateRef) {
    } else {
      var injector = this.createInjector(config, dialogRef, dialogContainer);
      var contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, void 0, injector));
      dialogRef.componentInstance = contentRef.instance;
    }
    dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
    return dialogRef;
  };
  OwlDialogService2.prototype.createInjector = function(config, dialogRef, dialogContainer) {
    var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    var injectionTokens = /* @__PURE__ */ new WeakMap();
    injectionTokens.set(OwlDialogRef, dialogRef);
    injectionTokens.set(OwlDialogContainerComponent, dialogContainer);
    injectionTokens.set(OWL_DIALOG_DATA, config.data);
    return new PortalInjector(userInjector || this.injector, injectionTokens);
  };
  OwlDialogService2.prototype.createOverlay = function(config) {
    var overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  };
  OwlDialogService2.prototype.attachDialogContainer = function(overlayRef, config) {
    var containerPortal = new ComponentPortal(OwlDialogContainerComponent, config.viewContainerRef);
    var containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.setConfig(config);
    return containerRef.instance;
  };
  OwlDialogService2.prototype.getOverlayConfig = function(dialogConfig) {
    var state2 = new OverlayConfig({
      positionStrategy: this.overlay.position().global(),
      scrollStrategy: dialogConfig.scrollStrategy || this.scrollStrategy(),
      panelClass: dialogConfig.paneClass,
      hasBackdrop: dialogConfig.hasBackdrop,
      minWidth: dialogConfig.minWidth,
      minHeight: dialogConfig.minHeight,
      maxWidth: dialogConfig.maxWidth,
      maxHeight: dialogConfig.maxHeight
    });
    if (dialogConfig.backdropClass) {
      state2.backdropClass = dialogConfig.backdropClass;
    }
    return state2;
  };
  OwlDialogService2.prototype.removeOpenDialog = function(dialogRef) {
    var index = this._openDialogsAtThisLevel.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this.ariaHiddenElements.forEach(function(previousValue, element) {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this.ariaHiddenElements.clear();
        this._afterAllClosed.next();
      }
    }
  };
  OwlDialogService2.prototype.hideNonDialogContentFromAssistiveTechnology = function() {
    var overlayContainer = this.overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      var siblings = overlayContainer.parentElement.children;
      for (var i = siblings.length - 1; i > -1; i--) {
        var sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this.ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  };
  OwlDialogService2 = __decorate7([Injectable(), __param6(2, Optional()), __param6(3, Inject(OWL_DIALOG_SCROLL_STRATEGY)), __param6(4, Optional()), __param6(4, Inject(OWL_DIALOG_DEFAULT_OPTIONS)), __param6(5, Optional()), __param6(5, SkipSelf()), __metadata6("design:paramtypes", [Overlay, Injector, Location, Function, OwlDialogConfig, OwlDialogService2, OverlayContainer])], OwlDialogService2);
  return OwlDialogService2;
}();
function applyConfigDefaults(config, defaultOptions) {
  return extendObject(new OwlDialogConfig(), config, defaultOptions);
}

// node_modules/ng-pick-datetime/dialog/dialog.module.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OwlDialogModule = function() {
  function OwlDialogModule2() {
  }
  OwlDialogModule2 = __decorate8([NgModule({
    imports: [CommonModule, A11yModule, OverlayModule, PortalModule],
    exports: [],
    declarations: [OwlDialogContainerComponent],
    providers: [OWL_DIALOG_SCROLL_STRATEGY_PROVIDER, OwlDialogService],
    entryComponents: [OwlDialogContainerComponent]
  })], OwlDialogModule2);
  return OwlDialogModule2;
}();

// node_modules/ng-pick-datetime/date-time/date-time-picker.component.js
var __extends2 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata7 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param7 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var OWL_DTPICKER_SCROLL_STRATEGY = new InjectionToken("owl-dtpicker-scroll-strategy");
function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function() {
    return overlay.scrollStrategies.block();
  };
}
var OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER = {
  provide: OWL_DTPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OwlDateTimeComponent = function(_super) {
  __extends2(OwlDateTimeComponent2, _super);
  function OwlDateTimeComponent2(overlay, viewContainerRef, dialogService, ngZone, changeDetector, dateTimeAdapter, defaultScrollStrategy, dateTimeFormats, document) {
    var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;
    _this.overlay = overlay;
    _this.viewContainerRef = viewContainerRef;
    _this.dialogService = dialogService;
    _this.ngZone = ngZone;
    _this.changeDetector = changeDetector;
    _this.dateTimeAdapter = dateTimeAdapter;
    _this.defaultScrollStrategy = defaultScrollStrategy;
    _this.dateTimeFormats = dateTimeFormats;
    _this.document = document;
    _this.backdropClass = [];
    _this.panelClass = [];
    _this._pickerType = "both";
    _this._pickerMode = "popup";
    _this._opened = false;
    _this.afterPickerClosed = new EventEmitter();
    _this.afterPickerOpen = new EventEmitter();
    _this.yearSelected = new EventEmitter();
    _this.monthSelected = new EventEmitter();
    _this.confirmSelectedChange = new EventEmitter();
    _this.disabledChange = new EventEmitter();
    _this.dtInputSub = Subscription.EMPTY;
    _this.hidePickerStreamSub = Subscription.EMPTY;
    _this.confirmSelectedStreamSub = Subscription.EMPTY;
    _this.pickerOpenedStreamSub = Subscription.EMPTY;
    _this.focusedElementBeforeOpen = null;
    _this._selecteds = [];
    return _this;
  }
  Object.defineProperty(OwlDateTimeComponent2.prototype, "startAt", {
    get: function() {
      if (this._startAt) {
        return this._startAt;
      }
      if (this._dtInput) {
        if (this._dtInput.selectMode === "single") {
          return this._dtInput.value || null;
        } else if (this._dtInput.selectMode === "range" || this._dtInput.selectMode === "rangeFrom") {
          return this._dtInput.values[0] || null;
        } else if (this._dtInput.selectMode === "rangeTo") {
          return this._dtInput.values[1] || null;
        }
      } else {
        return null;
      }
    },
    set: function(date) {
      this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "pickerType", {
    get: function() {
      return this._pickerType;
    },
    set: function(val) {
      if (val !== this._pickerType) {
        this._pickerType = val;
        if (this._dtInput) {
          this._dtInput.formatNativeInputValue();
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "pickerMode", {
    get: function() {
      return this._pickerMode;
    },
    set: function(mode) {
      if (mode === "popup") {
        this._pickerMode = mode;
      } else {
        this._pickerMode = "dialog";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "disabled", {
    get: function() {
      return this._disabled === void 0 && this._dtInput ? this._dtInput.disabled : !!this._disabled;
    },
    set: function(value) {
      value = coerceBooleanProperty(value);
      if (value !== this._disabled) {
        this._disabled = value;
        this.disabledChange.next(value);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "opened", {
    get: function() {
      return this._opened;
    },
    set: function(val) {
      val ? this.open() : this.close();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "dtInput", {
    get: function() {
      return this._dtInput;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "selected", {
    get: function() {
      return this._selected;
    },
    set: function(value) {
      this._selected = value;
      this.changeDetector.markForCheck();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "selecteds", {
    get: function() {
      return this._selecteds;
    },
    set: function(values) {
      this._selecteds = values;
      this.changeDetector.markForCheck();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "minDateTime", {
    get: function() {
      return this._dtInput && this._dtInput.min;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "maxDateTime", {
    get: function() {
      return this._dtInput && this._dtInput.max;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "dateTimeFilter", {
    get: function() {
      return this._dtInput && this._dtInput.dateTimeFilter;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "selectMode", {
    get: function() {
      return this._dtInput.selectMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "isInSingleMode", {
    get: function() {
      return this._dtInput.isInSingleMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeComponent2.prototype, "isInRangeMode", {
    get: function() {
      return this._dtInput.isInRangeMode;
    },
    enumerable: true,
    configurable: true
  });
  OwlDateTimeComponent2.prototype.ngOnInit = function() {
  };
  OwlDateTimeComponent2.prototype.ngOnDestroy = function() {
    this.close();
    this.dtInputSub.unsubscribe();
    this.disabledChange.complete();
    if (this.popupRef) {
      this.popupRef.dispose();
    }
  };
  OwlDateTimeComponent2.prototype.registerInput = function(input) {
    var _this = this;
    if (this._dtInput) {
      throw Error("A Owl DateTimePicker can only be associated with a single input.");
    }
    this._dtInput = input;
    this.dtInputSub = this._dtInput.valueChange.subscribe(function(value) {
      if (Array.isArray(value)) {
        _this.selecteds = value;
      } else {
        _this.selected = value;
      }
    });
  };
  OwlDateTimeComponent2.prototype.open = function() {
    var _this = this;
    if (this._opened || this.disabled) {
      return;
    }
    if (!this._dtInput) {
      throw Error("Attempted to open an DateTimePicker with no associated input.");
    }
    if (this.document) {
      this.focusedElementBeforeOpen = this.document.activeElement;
    }
    if (this.isInSingleMode) {
      this.selected = this._dtInput.value;
    } else if (this.isInRangeMode) {
      this.selecteds = this._dtInput.values;
    }
    if (this.selected && this.pickerType !== "calendar" && this._startAt) {
      this.selected = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.selected), this.dateTimeAdapter.getMonth(this.selected), this.dateTimeAdapter.getDate(this.selected), this.dateTimeAdapter.getHours(this._startAt), this.dateTimeAdapter.getMinutes(this._startAt), this.dateTimeAdapter.getSeconds(this._startAt));
    }
    this.pickerMode === "dialog" ? this.openAsDialog() : this.openAsPopup();
    this.pickerContainer.picker = this;
    this.hidePickerStreamSub = this.pickerContainer.hidePickerStream.subscribe(function() {
      _this.close();
    });
    this.confirmSelectedStreamSub = this.pickerContainer.confirmSelectedStream.subscribe(function(event2) {
      _this.confirmSelect(event2);
    });
  };
  OwlDateTimeComponent2.prototype.select = function(date) {
    if (Array.isArray(date)) {
      this.selecteds = date.slice();
    } else {
      this.selected = date;
    }
    if (this.pickerMode !== "dialog" && this.pickerType === "calendar" && (this.selectMode === "single" && this.selected || this.selectMode === "rangeFrom" && this.selecteds[0] || this.selectMode === "rangeTo" && this.selecteds[1] || this.selectMode === "range" && this.selecteds[0] && this.selecteds[1])) {
      this.confirmSelect();
    }
  };
  OwlDateTimeComponent2.prototype.selectYear = function(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  };
  OwlDateTimeComponent2.prototype.selectMonth = function(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  };
  OwlDateTimeComponent2.prototype.close = function() {
    var _this = this;
    if (!this._opened) {
      return;
    }
    if (this.popupRef && this.popupRef.hasAttached()) {
      this.popupRef.detach();
    }
    if (this.pickerContainerPortal && this.pickerContainerPortal.isAttached) {
      this.pickerContainerPortal.detach();
    }
    if (this.hidePickerStreamSub) {
      this.hidePickerStreamSub.unsubscribe();
      this.hidePickerStreamSub = null;
    }
    if (this.confirmSelectedStreamSub) {
      this.confirmSelectedStreamSub.unsubscribe();
      this.confirmSelectedStreamSub = null;
    }
    if (this.pickerOpenedStreamSub) {
      this.pickerOpenedStreamSub.unsubscribe();
      this.pickerOpenedStreamSub = null;
    }
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
    var completeClose = function() {
      if (_this._opened) {
        _this._opened = false;
        _this.afterPickerClosed.emit(null);
        _this.focusedElementBeforeOpen = null;
      }
    };
    if (this.focusedElementBeforeOpen && typeof this.focusedElementBeforeOpen.focus === "function") {
      this.focusedElementBeforeOpen.focus();
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  };
  OwlDateTimeComponent2.prototype.confirmSelect = function(event2) {
    if (this.isInSingleMode) {
      var selected = this.selected || this.startAt || this.dateTimeAdapter.now();
      this.confirmSelectedChange.emit(selected);
    } else if (this.isInRangeMode) {
      this.confirmSelectedChange.emit(this.selecteds);
    }
    this.close();
    return;
  };
  OwlDateTimeComponent2.prototype.openAsDialog = function() {
    var _this = this;
    this.dialogRef = this.dialogService.open(OwlDateTimeContainerComponent, {
      autoFocus: false,
      backdropClass: ["cdk-overlay-dark-backdrop"].concat(coerceArray(this.backdropClass)),
      paneClass: ["owl-dt-dialog"].concat(coerceArray(this.panelClass)),
      viewContainerRef: this.viewContainerRef,
      scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy()
    });
    this.pickerContainer = this.dialogRef.componentInstance;
    this.dialogRef.afterOpen().subscribe(function() {
      _this.afterPickerOpen.emit(null);
      _this._opened = true;
    });
    this.dialogRef.afterClosed().subscribe(function() {
      return _this.close();
    });
  };
  OwlDateTimeComponent2.prototype.openAsPopup = function() {
    var _this = this;
    if (!this.pickerContainerPortal) {
      this.pickerContainerPortal = new ComponentPortal(OwlDateTimeContainerComponent, this.viewContainerRef);
    }
    if (!this.popupRef) {
      this.createPopup();
    }
    if (!this.popupRef.hasAttached()) {
      var componentRef = this.popupRef.attach(this.pickerContainerPortal);
      this.pickerContainer = componentRef.instance;
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(function() {
        _this.popupRef.updatePosition();
      });
      this.pickerOpenedStreamSub = this.pickerContainer.pickerOpenedStream.pipe(take(1)).subscribe(function() {
        _this.afterPickerOpen.emit(null);
        _this._opened = true;
      });
    }
  };
  OwlDateTimeComponent2.prototype.createPopup = function() {
    var _this = this;
    var overlayConfig = new OverlayConfig({
      positionStrategy: this.createPopupPositionStrategy(),
      hasBackdrop: true,
      backdropClass: ["cdk-overlay-transparent-backdrop"].concat(coerceArray(this.backdropClass)),
      scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy(),
      panelClass: ["owl-dt-popup"].concat(coerceArray(this.panelClass))
    });
    this.popupRef = this.overlay.create(overlayConfig);
    merge(this.popupRef.backdropClick(), this.popupRef.detachments(), this.popupRef.keydownEvents().pipe(filter(function(event2) {
      return event2.keyCode === ESCAPE || _this._dtInput && event2.altKey && event2.keyCode === UP_ARROW;
    }))).subscribe(function() {
      return _this.close();
    });
  };
  OwlDateTimeComponent2.prototype.createPopupPositionStrategy = function() {
    return this.overlay.position().flexibleConnectedTo(this._dtInput.elementRef).withTransformOriginOn(".owl-dt-container").withFlexibleDimensions(false).withPush(false).withPositions([{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom"
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "top",
      offsetY: -176
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "top",
      offsetY: -352
    }]);
  };
  __decorate9([Input(), __metadata7("design:type", Object)], OwlDateTimeComponent2.prototype, "backdropClass", void 0);
  __decorate9([Input(), __metadata7("design:type", Object)], OwlDateTimeComponent2.prototype, "panelClass", void 0);
  __decorate9([Input(), __metadata7("design:type", Object), __metadata7("design:paramtypes", [Object])], OwlDateTimeComponent2.prototype, "startAt", null);
  __decorate9([Input(), __metadata7("design:type", String), __metadata7("design:paramtypes", [String])], OwlDateTimeComponent2.prototype, "pickerType", null);
  __decorate9([Input(), __metadata7("design:type", String), __metadata7("design:paramtypes", [String])], OwlDateTimeComponent2.prototype, "pickerMode", null);
  __decorate9([Input(), __metadata7("design:type", Boolean), __metadata7("design:paramtypes", [Boolean])], OwlDateTimeComponent2.prototype, "disabled", null);
  __decorate9([Input(), __metadata7("design:type", Boolean), __metadata7("design:paramtypes", [Boolean])], OwlDateTimeComponent2.prototype, "opened", null);
  __decorate9([Input(), __metadata7("design:type", Object)], OwlDateTimeComponent2.prototype, "scrollStrategy", void 0);
  __decorate9([Output(), __metadata7("design:type", Object)], OwlDateTimeComponent2.prototype, "afterPickerClosed", void 0);
  __decorate9([Output(), __metadata7("design:type", Object)], OwlDateTimeComponent2.prototype, "afterPickerOpen", void 0);
  __decorate9([Output(), __metadata7("design:type", Object)], OwlDateTimeComponent2.prototype, "yearSelected", void 0);
  __decorate9([Output(), __metadata7("design:type", Object)], OwlDateTimeComponent2.prototype, "monthSelected", void 0);
  OwlDateTimeComponent2 = __decorate9([Component({
    selector: "owl-date-time",
    exportAs: "owlDateTime",
    template: "",
    styles: [""],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
  }), __param7(5, Optional()), __param7(6, Inject(OWL_DTPICKER_SCROLL_STRATEGY)), __param7(7, Optional()), __param7(7, Inject(OWL_DATE_TIME_FORMATS)), __param7(8, Optional()), __param7(8, Inject(DOCUMENT)), __metadata7("design:paramtypes", [Overlay, ViewContainerRef, OwlDialogService, NgZone, ChangeDetectorRef, DateTimeAdapter, Function, Object, Object])], OwlDateTimeComponent2);
  return OwlDateTimeComponent2;
}(OwlDateTime);

// node_modules/ng-pick-datetime/date-time/date-time-picker-trigger.directive.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata8 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OwlDateTimeTriggerDirective = function() {
  function OwlDateTimeTriggerDirective2(changeDetector) {
    this.changeDetector = changeDetector;
    this.stateChanges = Subscription.EMPTY;
  }
  Object.defineProperty(OwlDateTimeTriggerDirective2.prototype, "disabled", {
    get: function() {
      return this._disabled === void 0 ? this.dtPicker.disabled : !!this._disabled;
    },
    set: function(value) {
      this._disabled = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeTriggerDirective2.prototype, "owlDTTriggerDisabledClass", {
    get: function() {
      return this.disabled;
    },
    enumerable: true,
    configurable: true
  });
  OwlDateTimeTriggerDirective2.prototype.ngOnInit = function() {
  };
  OwlDateTimeTriggerDirective2.prototype.ngOnChanges = function(changes) {
    if (changes.datepicker) {
      this.watchStateChanges();
    }
  };
  OwlDateTimeTriggerDirective2.prototype.ngAfterContentInit = function() {
    this.watchStateChanges();
  };
  OwlDateTimeTriggerDirective2.prototype.ngOnDestroy = function() {
    this.stateChanges.unsubscribe();
  };
  OwlDateTimeTriggerDirective2.prototype.handleClickOnHost = function(event2) {
    if (this.dtPicker) {
      this.dtPicker.open();
      event2.stopPropagation();
    }
  };
  OwlDateTimeTriggerDirective2.prototype.watchStateChanges = function() {
    var _this = this;
    this.stateChanges.unsubscribe();
    var inputDisabled = this.dtPicker && this.dtPicker.dtInput ? this.dtPicker.dtInput.disabledChange : of();
    var pickerDisabled = this.dtPicker ? this.dtPicker.disabledChange : of();
    this.stateChanges = merge(pickerDisabled, inputDisabled).subscribe(function() {
      _this.changeDetector.markForCheck();
    });
  };
  __decorate10([Input("owlDateTimeTrigger"), __metadata8("design:type", OwlDateTimeComponent)], OwlDateTimeTriggerDirective2.prototype, "dtPicker", void 0);
  __decorate10([Input(), __metadata8("design:type", Boolean), __metadata8("design:paramtypes", [Boolean])], OwlDateTimeTriggerDirective2.prototype, "disabled", null);
  __decorate10([HostBinding("class.owl-dt-trigger-disabled"), __metadata8("design:type", Boolean), __metadata8("design:paramtypes", [])], OwlDateTimeTriggerDirective2.prototype, "owlDTTriggerDisabledClass", null);
  __decorate10([HostListener("click", ["$event"]), __metadata8("design:type", Function), __metadata8("design:paramtypes", [Event]), __metadata8("design:returntype", void 0)], OwlDateTimeTriggerDirective2.prototype, "handleClickOnHost", null);
  OwlDateTimeTriggerDirective2 = __decorate10([Directive({
    selector: "[owlDateTimeTrigger]"
  }), __metadata8("design:paramtypes", [ChangeDetectorRef])], OwlDateTimeTriggerDirective2);
  return OwlDateTimeTriggerDirective2;
}();

// node_modules/ng-pick-datetime/date-time/date-time-picker-input.directive.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata9 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param8 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var OWL_DATETIME_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(function() {
    return OwlDateTimeInputDirective;
  }),
  multi: true
};
var OWL_DATETIME_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(function() {
    return OwlDateTimeInputDirective;
  }),
  multi: true
};
var OwlDateTimeInputDirective = function() {
  function OwlDateTimeInputDirective2(elmRef, renderer, dateTimeAdapter, dateTimeFormats) {
    var _this = this;
    this.elmRef = elmRef;
    this.renderer = renderer;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this._selectMode = "single";
    this.rangeSeparator = "~";
    this._values = [];
    this.dateTimeChange = new EventEmitter();
    this.dateTimeInput = new EventEmitter();
    this.dtPickerSub = Subscription.EMPTY;
    this.localeSub = Subscription.EMPTY;
    this.lastValueValid = true;
    this.onModelChange = function() {
    };
    this.onModelTouched = function() {
    };
    this.validatorOnChange = function() {
    };
    this.parseValidator = function() {
      return _this.lastValueValid ? null : {
        "owlDateTimeParse": {
          "text": _this.elmRef.nativeElement.value
        }
      };
    };
    this.minValidator = function(control) {
      if (_this.isInSingleMode) {
        var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));
        return !_this.min || !controlValue || _this.dateTimeAdapter.compare(_this.min, controlValue) <= 0 ? null : {
          "owlDateTimeMin": {
            "min": _this.min,
            "actual": controlValue
          }
        };
      } else if (_this.isInRangeMode && control.value) {
        var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));
        var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));
        return !_this.min || !controlValueFrom || !controlValueTo || _this.dateTimeAdapter.compare(_this.min, controlValueFrom) <= 0 ? null : {
          "owlDateTimeMin": {
            "min": _this.min,
            "actual": [controlValueFrom, controlValueTo]
          }
        };
      }
    };
    this.maxValidator = function(control) {
      if (_this.isInSingleMode) {
        var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));
        return !_this.max || !controlValue || _this.dateTimeAdapter.compare(_this.max, controlValue) >= 0 ? null : {
          "owlDateTimeMax": {
            "max": _this.max,
            "actual": controlValue
          }
        };
      } else if (_this.isInRangeMode && control.value) {
        var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));
        var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));
        return !_this.max || !controlValueFrom || !controlValueTo || _this.dateTimeAdapter.compare(_this.max, controlValueTo) >= 0 ? null : {
          "owlDateTimeMax": {
            "max": _this.max,
            "actual": [controlValueFrom, controlValueTo]
          }
        };
      }
    };
    this.filterValidator = function(control) {
      var controlValue = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value));
      return !_this._dateTimeFilter || !controlValue || _this._dateTimeFilter(controlValue) ? null : {
        "owlDateTimeFilter": true
      };
    };
    this.rangeValidator = function(control) {
      if (_this.isInSingleMode || !control.value) {
        return null;
      }
      var controlValueFrom = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[0]));
      var controlValueTo = _this.getValidDate(_this.dateTimeAdapter.deserialize(control.value[1]));
      return !controlValueFrom || !controlValueTo || _this.dateTimeAdapter.compare(controlValueFrom, controlValueTo) <= 0 ? null : {
        "owlDateTimeRange": true
      };
    };
    this.validator = Validators.compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator, this.rangeValidator]);
    this.valueChange = new EventEmitter();
    this.disabledChange = new EventEmitter();
    if (!this.dateTimeAdapter) {
      throw Error("OwlDateTimePicker: No provider found for DateTimePicker. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.");
    }
    if (!this.dateTimeFormats) {
      throw Error("OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.");
    }
    this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function() {
      _this.value = _this.value;
    });
  }
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "owlDateTime", {
    set: function(value) {
      this.registerDateTimePicker(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "owlDateTimeFilter", {
    set: function(filter2) {
      this._dateTimeFilter = filter2;
      this.validatorOnChange();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "dateTimeFilter", {
    get: function() {
      return this._dateTimeFilter;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "disabled", {
    get: function() {
      return !!this._disabled;
    },
    set: function(value) {
      var newValue = coerceBooleanProperty(value);
      var element = this.elmRef.nativeElement;
      if (this._disabled !== newValue) {
        this._disabled = newValue;
        this.disabledChange.emit(newValue);
      }
      if (newValue && element.blur) {
        element.blur();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "min", {
    get: function() {
      return this._min;
    },
    set: function(value) {
      this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
      this.validatorOnChange();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "max", {
    get: function() {
      return this._max;
    },
    set: function(value) {
      this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
      this.validatorOnChange();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "selectMode", {
    get: function() {
      return this._selectMode;
    },
    set: function(mode) {
      if (mode !== "single" && mode !== "range" && mode !== "rangeFrom" && mode !== "rangeTo") {
        throw Error("OwlDateTime Error: invalid selectMode value!");
      }
      this._selectMode = mode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "value", {
    get: function() {
      return this._value;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this.lastValueValid = !value || this.dateTimeAdapter.isValid(value);
      value = this.getValidDate(value);
      var oldDate = this._value;
      this._value = value;
      this.formatNativeInputValue();
      if (!this.dateTimeAdapter.isEqual(oldDate, value)) {
        this.valueChange.emit(value);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "values", {
    get: function() {
      return this._values;
    },
    set: function(values) {
      var _this = this;
      if (values && values.length > 0) {
        this._values = values.map(function(v) {
          v = _this.dateTimeAdapter.deserialize(v);
          return _this.getValidDate(v);
        });
        this.lastValueValid = (!this._values[0] || this.dateTimeAdapter.isValid(this._values[0])) && (!this._values[1] || this.dateTimeAdapter.isValid(this._values[1]));
      } else {
        this._values = [];
        this.lastValueValid = true;
      }
      this.formatNativeInputValue();
      this.valueChange.emit(this._values);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "elementRef", {
    get: function() {
      return this.elmRef;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "isInSingleMode", {
    get: function() {
      return this._selectMode === "single";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "isInRangeMode", {
    get: function() {
      return this._selectMode === "range" || this._selectMode === "rangeFrom" || this._selectMode === "rangeTo";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "owlDateTimeInputAriaHaspopup", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "owlDateTimeInputAriaOwns", {
    get: function() {
      return this.dtPicker.opened && this.dtPicker.id || null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "minIso8601", {
    get: function() {
      return this.min ? this.dateTimeAdapter.toIso8601(this.min) : null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "maxIso8601", {
    get: function() {
      return this.max ? this.dateTimeAdapter.toIso8601(this.max) : null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInputDirective2.prototype, "owlDateTimeInputDisabled", {
    get: function() {
      return this.disabled;
    },
    enumerable: true,
    configurable: true
  });
  OwlDateTimeInputDirective2.prototype.ngOnInit = function() {
    if (!this.dtPicker) {
      throw Error("OwlDateTimePicker: the picker input doesn't have any associated owl-date-time component");
    }
  };
  OwlDateTimeInputDirective2.prototype.ngAfterContentInit = function() {
    var _this = this;
    this.dtPickerSub = this.dtPicker.confirmSelectedChange.subscribe(function(selecteds) {
      if (Array.isArray(selecteds)) {
        _this.values = selecteds;
      } else {
        _this.value = selecteds;
      }
      _this.onModelChange(selecteds);
      _this.onModelTouched();
      _this.dateTimeChange.emit({
        source: _this,
        value: selecteds,
        input: _this.elmRef.nativeElement
      });
      _this.dateTimeInput.emit({
        source: _this,
        value: selecteds,
        input: _this.elmRef.nativeElement
      });
    });
  };
  OwlDateTimeInputDirective2.prototype.ngOnDestroy = function() {
    this.dtPickerSub.unsubscribe();
    this.localeSub.unsubscribe();
    this.valueChange.complete();
    this.disabledChange.complete();
  };
  OwlDateTimeInputDirective2.prototype.writeValue = function(value) {
    if (this.isInSingleMode) {
      this.value = value;
    } else {
      this.values = value;
    }
  };
  OwlDateTimeInputDirective2.prototype.registerOnChange = function(fn) {
    this.onModelChange = fn;
  };
  OwlDateTimeInputDirective2.prototype.registerOnTouched = function(fn) {
    this.onModelTouched = fn;
  };
  OwlDateTimeInputDirective2.prototype.setDisabledState = function(isDisabled) {
    this.disabled = isDisabled;
  };
  OwlDateTimeInputDirective2.prototype.validate = function(c) {
    return this.validator ? this.validator(c) : null;
  };
  OwlDateTimeInputDirective2.prototype.registerOnValidatorChange = function(fn) {
    this.validatorOnChange = fn;
  };
  OwlDateTimeInputDirective2.prototype.handleKeydownOnHost = function(event2) {
    if (event2.altKey && event2.keyCode === DOWN_ARROW) {
      this.dtPicker.open();
      event2.preventDefault();
    }
  };
  OwlDateTimeInputDirective2.prototype.handleBlurOnHost = function(event2) {
    this.onModelTouched();
  };
  OwlDateTimeInputDirective2.prototype.handleInputOnHost = function(event2) {
    var value = event2.target.value;
    if (this._selectMode === "single") {
      this.changeInputInSingleMode(value);
    } else if (this._selectMode === "range") {
      this.changeInputInRangeMode(value);
    } else {
      this.changeInputInRangeFromToMode(value);
    }
  };
  OwlDateTimeInputDirective2.prototype.handleChangeOnHost = function(event2) {
    var v;
    if (this.isInSingleMode) {
      v = this.value;
    } else if (this.isInRangeMode) {
      v = this.values;
    }
    this.dateTimeChange.emit({
      source: this,
      value: v,
      input: this.elmRef.nativeElement
    });
  };
  OwlDateTimeInputDirective2.prototype.formatNativeInputValue = function() {
    if (this.isInSingleMode) {
      this.renderer.setProperty(this.elmRef.nativeElement, "value", this._value ? this.dateTimeAdapter.format(this._value, this.dtPicker.formatString) : "");
    } else if (this.isInRangeMode) {
      if (this._values && this.values.length > 0) {
        var from = this._values[0];
        var to = this._values[1];
        var fromFormatted = from ? this.dateTimeAdapter.format(from, this.dtPicker.formatString) : "";
        var toFormatted = to ? this.dateTimeAdapter.format(to, this.dtPicker.formatString) : "";
        if (!fromFormatted && !toFormatted) {
          this.renderer.setProperty(this.elmRef.nativeElement, "value", null);
        } else {
          if (this._selectMode === "range") {
            this.renderer.setProperty(this.elmRef.nativeElement, "value", fromFormatted + " " + this.rangeSeparator + " " + toFormatted);
          } else if (this._selectMode === "rangeFrom") {
            this.renderer.setProperty(this.elmRef.nativeElement, "value", fromFormatted);
          } else if (this._selectMode === "rangeTo") {
            this.renderer.setProperty(this.elmRef.nativeElement, "value", toFormatted);
          }
        }
      } else {
        this.renderer.setProperty(this.elmRef.nativeElement, "value", "");
      }
    }
    return;
  };
  OwlDateTimeInputDirective2.prototype.registerDateTimePicker = function(picker) {
    if (picker) {
      this.dtPicker = picker;
      this.dtPicker.registerInput(this);
    }
  };
  OwlDateTimeInputDirective2.prototype.getValidDate = function(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  };
  OwlDateTimeInputDirective2.prototype.convertTimeStringToDateTimeString = function(timeString, dateTime) {
    if (timeString) {
      var v = dateTime || this.dateTimeAdapter.now();
      var dateString = this.dateTimeAdapter.format(v, this.dateTimeFormats.datePickerInput);
      return dateString + " " + timeString;
    } else {
      return null;
    }
  };
  OwlDateTimeInputDirective2.prototype.changeInputInSingleMode = function(inputValue) {
    var value = inputValue;
    if (this.dtPicker.pickerType === "timer") {
      value = this.convertTimeStringToDateTimeString(value, this.value);
    }
    var result = this.dateTimeAdapter.parse(value, this.dateTimeFormats.parseInput);
    this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
    result = this.getValidDate(result);
    if (!this.isSameValue(result, this._value) || result === null) {
      this._value = result;
      this.valueChange.emit(result);
      this.onModelChange(result);
      this.dateTimeInput.emit({
        source: this,
        value: result,
        input: this.elmRef.nativeElement
      });
    }
  };
  OwlDateTimeInputDirective2.prototype.changeInputInRangeFromToMode = function(inputValue) {
    var originalValue = this._selectMode === "rangeFrom" ? this._values[0] : this._values[1];
    if (this.dtPicker.pickerType === "timer") {
      inputValue = this.convertTimeStringToDateTimeString(inputValue, originalValue);
    }
    var result = this.dateTimeAdapter.parse(inputValue, this.dateTimeFormats.parseInput);
    this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
    result = this.getValidDate(result);
    if (this._selectMode === "rangeFrom" && this.isSameValue(result, this._values[0]) && result || this._selectMode === "rangeTo" && this.isSameValue(result, this._values[1]) && result) {
      return;
    }
    this._values = this._selectMode === "rangeFrom" ? [result, this._values[1]] : [this._values[0], result];
    this.valueChange.emit(this._values);
    this.onModelChange(this._values);
    this.dateTimeInput.emit({
      source: this,
      value: this._values,
      input: this.elmRef.nativeElement
    });
  };
  OwlDateTimeInputDirective2.prototype.changeInputInRangeMode = function(inputValue) {
    var selecteds = inputValue.split(this.rangeSeparator);
    var fromString = selecteds[0];
    var toString = selecteds[1];
    if (this.dtPicker.pickerType === "timer") {
      fromString = this.convertTimeStringToDateTimeString(fromString, this.values[0]);
      toString = this.convertTimeStringToDateTimeString(toString, this.values[1]);
    }
    var from = this.dateTimeAdapter.parse(fromString, this.dateTimeFormats.parseInput);
    var to = this.dateTimeAdapter.parse(toString, this.dateTimeFormats.parseInput);
    this.lastValueValid = (!from || this.dateTimeAdapter.isValid(from)) && (!to || this.dateTimeAdapter.isValid(to));
    from = this.getValidDate(from);
    to = this.getValidDate(to);
    if (!this.isSameValue(from, this._values[0]) || !this.isSameValue(to, this._values[1]) || from === null && to === null) {
      this._values = [from, to];
      this.valueChange.emit(this._values);
      this.onModelChange(this._values);
      this.dateTimeInput.emit({
        source: this,
        value: this._values,
        input: this.elmRef.nativeElement
      });
    }
  };
  OwlDateTimeInputDirective2.prototype.isSameValue = function(first, second) {
    if (first && second) {
      return this.dateTimeAdapter.compare(first, second) === 0;
    }
    return first == second;
  };
  __decorate11([Input(), __metadata9("design:type", OwlDateTimeComponent), __metadata9("design:paramtypes", [OwlDateTimeComponent])], OwlDateTimeInputDirective2.prototype, "owlDateTime", null);
  __decorate11([Input(), __metadata9("design:type", Function), __metadata9("design:paramtypes", [Function])], OwlDateTimeInputDirective2.prototype, "owlDateTimeFilter", null);
  __decorate11([Input(), __metadata9("design:type", Boolean)], OwlDateTimeInputDirective2.prototype, "_disabled", void 0);
  __decorate11([Input(), __metadata9("design:type", Object), __metadata9("design:paramtypes", [Object])], OwlDateTimeInputDirective2.prototype, "min", null);
  __decorate11([Input(), __metadata9("design:type", Object), __metadata9("design:paramtypes", [Object])], OwlDateTimeInputDirective2.prototype, "max", null);
  __decorate11([Input(), __metadata9("design:type", String), __metadata9("design:paramtypes", [String])], OwlDateTimeInputDirective2.prototype, "selectMode", null);
  __decorate11([Input(), __metadata9("design:type", Object)], OwlDateTimeInputDirective2.prototype, "rangeSeparator", void 0);
  __decorate11([Input(), __metadata9("design:type", Object), __metadata9("design:paramtypes", [Object])], OwlDateTimeInputDirective2.prototype, "value", null);
  __decorate11([Input(), __metadata9("design:type", Array), __metadata9("design:paramtypes", [Array])], OwlDateTimeInputDirective2.prototype, "values", null);
  __decorate11([Output(), __metadata9("design:type", Object)], OwlDateTimeInputDirective2.prototype, "dateTimeChange", void 0);
  __decorate11([Output(), __metadata9("design:type", Object)], OwlDateTimeInputDirective2.prototype, "dateTimeInput", void 0);
  __decorate11([HostBinding("attr.aria-haspopup"), __metadata9("design:type", Boolean), __metadata9("design:paramtypes", [])], OwlDateTimeInputDirective2.prototype, "owlDateTimeInputAriaHaspopup", null);
  __decorate11([HostBinding("attr.aria-owns"), __metadata9("design:type", String), __metadata9("design:paramtypes", [])], OwlDateTimeInputDirective2.prototype, "owlDateTimeInputAriaOwns", null);
  __decorate11([HostBinding("attr.min"), __metadata9("design:type", String), __metadata9("design:paramtypes", [])], OwlDateTimeInputDirective2.prototype, "minIso8601", null);
  __decorate11([HostBinding("attr.max"), __metadata9("design:type", String), __metadata9("design:paramtypes", [])], OwlDateTimeInputDirective2.prototype, "maxIso8601", null);
  __decorate11([HostBinding("disabled"), __metadata9("design:type", Boolean), __metadata9("design:paramtypes", [])], OwlDateTimeInputDirective2.prototype, "owlDateTimeInputDisabled", null);
  __decorate11([HostListener("keydown", ["$event"]), __metadata9("design:type", Function), __metadata9("design:paramtypes", [KeyboardEvent]), __metadata9("design:returntype", void 0)], OwlDateTimeInputDirective2.prototype, "handleKeydownOnHost", null);
  __decorate11([HostListener("blur", ["$event"]), __metadata9("design:type", Function), __metadata9("design:paramtypes", [Event]), __metadata9("design:returntype", void 0)], OwlDateTimeInputDirective2.prototype, "handleBlurOnHost", null);
  __decorate11([HostListener("input", ["$event"]), __metadata9("design:type", Function), __metadata9("design:paramtypes", [Object]), __metadata9("design:returntype", void 0)], OwlDateTimeInputDirective2.prototype, "handleInputOnHost", null);
  __decorate11([HostListener("change", ["$event"]), __metadata9("design:type", Function), __metadata9("design:paramtypes", [Object]), __metadata9("design:returntype", void 0)], OwlDateTimeInputDirective2.prototype, "handleChangeOnHost", null);
  OwlDateTimeInputDirective2 = __decorate11([Directive({
    selector: "input[owlDateTime]",
    exportAs: "owlDateTimeInput",
    providers: [OWL_DATETIME_VALUE_ACCESSOR, OWL_DATETIME_VALIDATORS]
  }), __param8(2, Optional()), __param8(3, Optional()), __param8(3, Inject(OWL_DATE_TIME_FORMATS)), __metadata9("design:paramtypes", [ElementRef, Renderer2, DateTimeAdapter, Object])], OwlDateTimeInputDirective2);
  return OwlDateTimeInputDirective2;
}();

// node_modules/ng-pick-datetime/date-time/calendar-body.component.js
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata10 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CalendarCell = /* @__PURE__ */ function() {
  function CalendarCell2(value, displayValue, ariaLabel, enabled, out, cellClass) {
    if (out === void 0) {
      out = false;
    }
    if (cellClass === void 0) {
      cellClass = "";
    }
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.out = out;
    this.cellClass = cellClass;
  }
  return CalendarCell2;
}();
var OwlCalendarBodyComponent = function() {
  function OwlCalendarBodyComponent2(elmRef, ngZone) {
    this.elmRef = elmRef;
    this.ngZone = ngZone;
    this.activeCell = 0;
    this.numCols = 7;
    this.cellRatio = 1;
    this.select = new EventEmitter();
  }
  Object.defineProperty(OwlCalendarBodyComponent2.prototype, "owlDTCalendarBodyClass", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarBodyComponent2.prototype, "isInSingleMode", {
    get: function() {
      return this.selectMode === "single";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlCalendarBodyComponent2.prototype, "isInRangeMode", {
    get: function() {
      return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
    },
    enumerable: true,
    configurable: true
  });
  OwlCalendarBodyComponent2.prototype.ngOnInit = function() {
  };
  OwlCalendarBodyComponent2.prototype.selectCell = function(cell) {
    this.select.emit(cell);
  };
  OwlCalendarBodyComponent2.prototype.isActiveCell = function(rowIndex, colIndex) {
    var cellNumber = rowIndex * this.numCols + colIndex;
    return cellNumber === this.activeCell;
  };
  OwlCalendarBodyComponent2.prototype.isSelected = function(value) {
    if (!this.selectedValues || this.selectedValues.length === 0) {
      return false;
    }
    if (this.isInSingleMode) {
      return value === this.selectedValues[0];
    }
    if (this.isInRangeMode) {
      var fromValue = this.selectedValues[0];
      var toValue = this.selectedValues[1];
      return value === fromValue || value === toValue;
    }
  };
  OwlCalendarBodyComponent2.prototype.isInRange = function(value) {
    if (this.isInRangeMode) {
      var fromValue = this.selectedValues[0];
      var toValue = this.selectedValues[1];
      if (fromValue !== null && toValue !== null) {
        return value >= fromValue && value <= toValue;
      } else {
        return value === fromValue || value === toValue;
      }
    }
  };
  OwlCalendarBodyComponent2.prototype.isRangeFrom = function(value) {
    if (this.isInRangeMode) {
      var fromValue = this.selectedValues[0];
      return fromValue !== null && value === fromValue;
    }
  };
  OwlCalendarBodyComponent2.prototype.isRangeTo = function(value) {
    if (this.isInRangeMode) {
      var toValue = this.selectedValues[1];
      return toValue !== null && value === toValue;
    }
  };
  OwlCalendarBodyComponent2.prototype.focusActiveCell = function() {
    var _this = this;
    this.ngZone.runOutsideAngular(function() {
      _this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(function() {
        _this.elmRef.nativeElement.querySelector(".owl-dt-calendar-cell-active").focus();
      });
    });
  };
  __decorate12([Input(), __metadata10("design:type", Object)], OwlCalendarBodyComponent2.prototype, "activeCell", void 0);
  __decorate12([Input(), __metadata10("design:type", Array)], OwlCalendarBodyComponent2.prototype, "rows", void 0);
  __decorate12([Input(), __metadata10("design:type", Object)], OwlCalendarBodyComponent2.prototype, "numCols", void 0);
  __decorate12([Input(), __metadata10("design:type", Object)], OwlCalendarBodyComponent2.prototype, "cellRatio", void 0);
  __decorate12([Input(), __metadata10("design:type", Number)], OwlCalendarBodyComponent2.prototype, "todayValue", void 0);
  __decorate12([Input(), __metadata10("design:type", Array)], OwlCalendarBodyComponent2.prototype, "selectedValues", void 0);
  __decorate12([Input(), __metadata10("design:type", String)], OwlCalendarBodyComponent2.prototype, "selectMode", void 0);
  __decorate12([Output(), __metadata10("design:type", Object)], OwlCalendarBodyComponent2.prototype, "select", void 0);
  __decorate12([HostBinding("class.owl-dt-calendar-body"), __metadata10("design:type", Boolean), __metadata10("design:paramtypes", [])], OwlCalendarBodyComponent2.prototype, "owlDTCalendarBodyClass", null);
  OwlCalendarBodyComponent2 = __decorate12([Component({
    selector: "[owl-date-time-calendar-body]",
    exportAs: "owlDateTimeCalendarBody",
    template: `<tr *ngFor="let row of rows; let rowIndex = index" role="row"><td *ngFor="let item of row; let colIndex = index" class="owl-dt-calendar-cell {{item.cellClass}}" [tabindex]="isActiveCell(rowIndex, colIndex) ? 0 : -1" [class.owl-dt-calendar-cell-active]="isActiveCell(rowIndex, colIndex)" [class.owl-dt-calendar-cell-disabled]="!item.enabled" [class.owl-dt-calendar-cell-in-range]="isInRange(item.value)" [class.owl-dt-calendar-cell-range-from]="isRangeFrom(item.value)" [class.owl-dt-calendar-cell-range-to]="isRangeTo(item.value)" [attr.aria-label]="item.ariaLabel" [attr.aria-disabled]="!item.enabled || null" [style.width.%]="100 / numCols" [style.paddingTop.%]="50 * cellRatio / numCols" [style.paddingBottom.%]="50 * cellRatio / numCols" (click)="selectCell(item)"><span class="owl-dt-calendar-cell-content" [ngClass]="{
                'owl-dt-calendar-cell-out': item.out,
                'owl-dt-calendar-cell-today': item.value === todayValue,
                'owl-dt-calendar-cell-selected': isSelected(item.value)
              }">{{item.displayValue}}</span></td></tr>`,
    styles: [""],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
  }), __metadata10("design:paramtypes", [ElementRef, NgZone])], OwlCalendarBodyComponent2);
  return OwlCalendarBodyComponent2;
}();

// node_modules/ng-pick-datetime/date-time/calendar-month-view.component.js
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata11 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param9 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var DAYS_PER_WEEK = 7;
var WEEKS_PER_VIEW = 6;
var OwlMonthViewComponent = function() {
  function OwlMonthViewComponent2(cdRef, dateTimeAdapter, dateTimeFormats) {
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this.hideOtherMonths = false;
    this._firstDayOfWeek = 0;
    this._selectMode = "single";
    this._selecteds = [];
    this.localeSub = Subscription.EMPTY;
    this.initiated = false;
    this.selectedDates = [];
    this.selectedChange = new EventEmitter();
    this.userSelection = new EventEmitter();
    this.pickerMomentChange = new EventEmitter();
  }
  Object.defineProperty(OwlMonthViewComponent2.prototype, "firstDayOfWeek", {
    get: function() {
      return this._firstDayOfWeek;
    },
    set: function(val) {
      val = coerceNumberProperty(val);
      if (val >= 0 && val <= 6 && val !== this._firstDayOfWeek) {
        this._firstDayOfWeek = val;
        if (this.initiated) {
          this.generateWeekDays();
          this.generateCalendar();
          this.cdRef.markForCheck();
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "selectMode", {
    get: function() {
      return this._selectMode;
    },
    set: function(val) {
      this._selectMode = val;
      if (this.initiated) {
        this.generateCalendar();
        this.cdRef.markForCheck();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "selected", {
    get: function() {
      return this._selected;
    },
    set: function(value) {
      var oldSelected = this._selected;
      value = this.dateTimeAdapter.deserialize(value);
      this._selected = this.getValidDate(value);
      if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
        this.setSelectedDates();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "selecteds", {
    get: function() {
      return this._selecteds;
    },
    set: function(values) {
      var _this = this;
      this._selecteds = values.map(function(v) {
        v = _this.dateTimeAdapter.deserialize(v);
        return _this.getValidDate(v);
      });
      this.setSelectedDates();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "pickerMoment", {
    get: function() {
      return this._pickerMoment;
    },
    set: function(value) {
      var oldMoment = this._pickerMoment;
      value = this.dateTimeAdapter.deserialize(value);
      this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
      this.firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this._pickerMoment), this.dateTimeAdapter.getMonth(this._pickerMoment), 1);
      if (!this.isSameMonth(oldMoment, this._pickerMoment) && this.initiated) {
        this.generateCalendar();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "dateFilter", {
    get: function() {
      return this._dateFilter;
    },
    set: function(filter2) {
      this._dateFilter = filter2;
      if (this.initiated) {
        this.generateCalendar();
        this.cdRef.markForCheck();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "minDate", {
    get: function() {
      return this._minDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._minDate = this.getValidDate(value);
      if (this.initiated) {
        this.generateCalendar();
        this.cdRef.markForCheck();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "maxDate", {
    get: function() {
      return this._maxDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._maxDate = this.getValidDate(value);
      if (this.initiated) {
        this.generateCalendar();
        this.cdRef.markForCheck();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "weekdays", {
    get: function() {
      return this._weekdays;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "days", {
    get: function() {
      return this._days;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "activeCell", {
    get: function() {
      if (this.pickerMoment) {
        return this.dateTimeAdapter.getDate(this.pickerMoment) + this.firstRowOffset - 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "isInSingleMode", {
    get: function() {
      return this.selectMode === "single";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "isInRangeMode", {
    get: function() {
      return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMonthViewComponent2.prototype, "owlDTCalendarView", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  OwlMonthViewComponent2.prototype.ngOnInit = function() {
    var _this = this;
    this.generateWeekDays();
    this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function() {
      _this.generateWeekDays();
      _this.generateCalendar();
      _this.cdRef.markForCheck();
    });
  };
  OwlMonthViewComponent2.prototype.ngAfterContentInit = function() {
    this.generateCalendar();
    this.initiated = true;
  };
  OwlMonthViewComponent2.prototype.ngOnDestroy = function() {
    this.localeSub.unsubscribe();
  };
  OwlMonthViewComponent2.prototype.selectCalendarCell = function(cell) {
    if (!cell.enabled || this.hideOtherMonths && cell.out) {
      return;
    }
    this.selectDate(cell.value);
  };
  OwlMonthViewComponent2.prototype.selectDate = function(date) {
    var daysDiff = date - 1;
    var selected = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
    this.selectedChange.emit(selected);
    this.userSelection.emit();
  };
  OwlMonthViewComponent2.prototype.handleCalendarKeydown = function(event2) {
    var moment;
    switch (event2.keyCode) {
      case LEFT_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      case RIGHT_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      case UP_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -7);
        this.pickerMomentChange.emit(moment);
        break;
      case DOWN_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 7);
        this.pickerMomentChange.emit(moment);
        break;
      case HOME:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1 - this.dateTimeAdapter.getDate(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      case END:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment) - this.dateTimeAdapter.getDate(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      case PAGE_UP:
        moment = event2.altKey ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1) : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      case PAGE_DOWN:
        moment = event2.altKey ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1) : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      case ENTER:
        if (!this.dateFilter || this.dateFilter(this.pickerMoment)) {
          this.selectDate(this.dateTimeAdapter.getDate(this.pickerMoment));
        }
        break;
      default:
        return;
    }
    this.focusActiveCell();
    event2.preventDefault();
  };
  OwlMonthViewComponent2.prototype.generateWeekDays = function() {
    var longWeekdays = this.dateTimeAdapter.getDayOfWeekNames("long");
    var shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames("short");
    var narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames("narrow");
    var firstDayOfWeek = this.firstDayOfWeek;
    var weekdays = longWeekdays.map(function(long, i) {
      return {
        long,
        short: shortWeekdays[i],
        narrow: narrowWeekdays[i]
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    this.dateNames = this.dateTimeAdapter.getDateNames();
    return;
  };
  OwlMonthViewComponent2.prototype.generateCalendar = function() {
    if (!this.pickerMoment) {
      return;
    }
    this.todayDate = null;
    var startWeekdayOfMonth = this.dateTimeAdapter.getDay(this.firstDateOfMonth);
    var firstDayOfWeek = this.firstDayOfWeek;
    var daysDiff = 0 - (startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) % DAYS_PER_WEEK;
    this.firstRowOffset = Math.abs(daysDiff);
    this._days = [];
    for (var i = 0; i < WEEKS_PER_VIEW; i++) {
      var week = [];
      for (var j = 0; j < DAYS_PER_WEEK; j++) {
        var date = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
        var dateCell = this.createDateCell(date, daysDiff);
        if (this.dateTimeAdapter.isSameDay(this.dateTimeAdapter.now(), date)) {
          this.todayDate = daysDiff + 1;
        }
        week.push(dateCell);
        daysDiff += 1;
      }
      this._days.push(week);
    }
    this.setSelectedDates();
  };
  OwlMonthViewComponent2.prototype.createDateCell = function(date, daysDiff) {
    var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment);
    var dateNum = this.dateTimeAdapter.getDate(date);
    var dateName = dateNum.toString();
    var ariaLabel = this.dateTimeAdapter.format(date, this.dateTimeFormats.dateA11yLabel);
    var enabled = this.isDateEnabled(date);
    var dayValue = daysDiff + 1;
    var out = dayValue < 1 || dayValue > daysInMonth;
    var cellClass = "owl-dt-day-" + this.dateTimeAdapter.getDay(date);
    return new CalendarCell(dayValue, dateName, ariaLabel, enabled, out, cellClass);
  };
  OwlMonthViewComponent2.prototype.isDateEnabled = function(date) {
    return !!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) && (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0);
  };
  OwlMonthViewComponent2.prototype.getValidDate = function(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  };
  OwlMonthViewComponent2.prototype.isSameMonth = function(dateLeft, dateRight) {
    return !!(dateLeft && dateRight && this.dateTimeAdapter.isValid(dateLeft) && this.dateTimeAdapter.isValid(dateRight) && this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight) && this.dateTimeAdapter.getMonth(dateLeft) === this.dateTimeAdapter.getMonth(dateRight));
  };
  OwlMonthViewComponent2.prototype.setSelectedDates = function() {
    var _this = this;
    this.selectedDates = [];
    if (!this.firstDateOfMonth) {
      return;
    }
    if (this.isInSingleMode && this.selected) {
      var dayDiff = this.dateTimeAdapter.differenceInCalendarDays(this.selected, this.firstDateOfMonth);
      this.selectedDates[0] = dayDiff + 1;
      return;
    }
    if (this.isInRangeMode && this.selecteds) {
      this.selectedDates = this.selecteds.map(function(selected) {
        if (_this.dateTimeAdapter.isValid(selected)) {
          var dayDiff2 = _this.dateTimeAdapter.differenceInCalendarDays(selected, _this.firstDateOfMonth);
          return dayDiff2 + 1;
        } else {
          return null;
        }
      });
    }
  };
  OwlMonthViewComponent2.prototype.focusActiveCell = function() {
    this.calendarBodyElm.focusActiveCell();
  };
  __decorate13([Input(), __metadata11("design:type", Boolean)], OwlMonthViewComponent2.prototype, "hideOtherMonths", void 0);
  __decorate13([Input(), __metadata11("design:type", Number), __metadata11("design:paramtypes", [Number])], OwlMonthViewComponent2.prototype, "firstDayOfWeek", null);
  __decorate13([Input(), __metadata11("design:type", String), __metadata11("design:paramtypes", [String])], OwlMonthViewComponent2.prototype, "selectMode", null);
  __decorate13([Input(), __metadata11("design:type", Object), __metadata11("design:paramtypes", [Object])], OwlMonthViewComponent2.prototype, "selected", null);
  __decorate13([Input(), __metadata11("design:type", Array), __metadata11("design:paramtypes", [Array])], OwlMonthViewComponent2.prototype, "selecteds", null);
  __decorate13([Input(), __metadata11("design:type", Object), __metadata11("design:paramtypes", [Object])], OwlMonthViewComponent2.prototype, "pickerMoment", null);
  __decorate13([Input(), __metadata11("design:type", Function), __metadata11("design:paramtypes", [Function])], OwlMonthViewComponent2.prototype, "dateFilter", null);
  __decorate13([Input(), __metadata11("design:type", Object), __metadata11("design:paramtypes", [Object])], OwlMonthViewComponent2.prototype, "minDate", null);
  __decorate13([Input(), __metadata11("design:type", Object), __metadata11("design:paramtypes", [Object])], OwlMonthViewComponent2.prototype, "maxDate", null);
  __decorate13([Output(), __metadata11("design:type", Object)], OwlMonthViewComponent2.prototype, "selectedChange", void 0);
  __decorate13([Output(), __metadata11("design:type", Object)], OwlMonthViewComponent2.prototype, "userSelection", void 0);
  __decorate13([Output(), __metadata11("design:type", EventEmitter)], OwlMonthViewComponent2.prototype, "pickerMomentChange", void 0);
  __decorate13([ViewChild(OwlCalendarBodyComponent), __metadata11("design:type", OwlCalendarBodyComponent)], OwlMonthViewComponent2.prototype, "calendarBodyElm", void 0);
  __decorate13([HostBinding("class.owl-dt-calendar-view"), __metadata11("design:type", Boolean), __metadata11("design:paramtypes", [])], OwlMonthViewComponent2.prototype, "owlDTCalendarView", null);
  OwlMonthViewComponent2 = __decorate13([Component({
    selector: "owl-date-time-month-view",
    exportAs: "owlYearView",
    template: '<table class="owl-dt-calendar-table owl-dt-calendar-month-table" [class.owl-dt-calendar-only-current-month]="hideOtherMonths"><thead class="owl-dt-calendar-header"><tr class="owl-dt-weekdays"><th *ngFor="let weekday of weekdays" [attr.aria-label]="weekday.long" class="owl-dt-weekday" scope="col"><span>{{weekday.short}}</span></th></tr><tr><th class="owl-dt-calendar-table-divider" aria-hidden="true" colspan="7"></th></tr></thead><tbody owl-date-time-calendar-body role="grid" [rows]="days" [todayValue]="todayDate" [selectedValues]="selectedDates" [selectMode]="selectMode" [activeCell]="activeCell" (keydown)="handleCalendarKeydown($event)" (select)="selectCalendarCell($event)"></tbody></table>',
    styles: [""],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
  }), __param9(1, Optional()), __param9(2, Optional()), __param9(2, Inject(OWL_DATE_TIME_FORMATS)), __metadata11("design:paramtypes", [ChangeDetectorRef, DateTimeAdapter, Object])], OwlMonthViewComponent2);
  return OwlMonthViewComponent2;
}();

// node_modules/ng-pick-datetime/date-time/calendar-year-view.component.js
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata12 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param10 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var MONTHS_PER_YEAR = 12;
var MONTHS_PER_ROW = 3;
var OwlYearViewComponent = function() {
  function OwlYearViewComponent2(cdRef, dateTimeAdapter, dateTimeFormats) {
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this._selectMode = "single";
    this._selecteds = [];
    this.localeSub = Subscription.EMPTY;
    this.initiated = false;
    this.selectedMonths = [];
    this.change = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.pickerMomentChange = new EventEmitter();
    this.keyboardEnter = new EventEmitter();
    this.monthNames = this.dateTimeAdapter.getMonthNames("short");
  }
  Object.defineProperty(OwlYearViewComponent2.prototype, "selectMode", {
    get: function() {
      return this._selectMode;
    },
    set: function(val) {
      this._selectMode = val;
      if (this.initiated) {
        this.generateMonthList();
        this.cdRef.markForCheck();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "selected", {
    get: function() {
      return this._selected;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._selected = this.getValidDate(value);
      this.setSelectedMonths();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "selecteds", {
    get: function() {
      return this._selecteds;
    },
    set: function(values) {
      this._selecteds = [];
      for (var i = 0; i < values.length; i++) {
        var value = this.dateTimeAdapter.deserialize(values[i]);
        this._selecteds.push(this.getValidDate(value));
      }
      this.setSelectedMonths();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "pickerMoment", {
    get: function() {
      return this._pickerMoment;
    },
    set: function(value) {
      var oldMoment = this._pickerMoment;
      value = this.dateTimeAdapter.deserialize(value);
      this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
      if (!this.hasSameYear(oldMoment, this._pickerMoment) && this.initiated) {
        this.generateMonthList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "dateFilter", {
    get: function() {
      return this._dateFilter;
    },
    set: function(filter2) {
      this._dateFilter = filter2;
      if (this.initiated) {
        this.generateMonthList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "minDate", {
    get: function() {
      return this._minDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._minDate = this.getValidDate(value);
      if (this.initiated) {
        this.generateMonthList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "maxDate", {
    get: function() {
      return this._maxDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._maxDate = this.getValidDate(value);
      if (this.initiated) {
        this.generateMonthList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "months", {
    get: function() {
      return this._months;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "activeCell", {
    get: function() {
      if (this._pickerMoment) {
        return this.dateTimeAdapter.getMonth(this._pickerMoment);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "isInSingleMode", {
    get: function() {
      return this.selectMode === "single";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "isInRangeMode", {
    get: function() {
      return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlYearViewComponent2.prototype, "owlDTCalendarView", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  OwlYearViewComponent2.prototype.ngOnInit = function() {
    var _this = this;
    this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(function() {
      _this.generateMonthList();
      _this.cdRef.markForCheck();
    });
  };
  OwlYearViewComponent2.prototype.ngAfterContentInit = function() {
    this.generateMonthList();
    this.initiated = true;
  };
  OwlYearViewComponent2.prototype.ngOnDestroy = function() {
    this.localeSub.unsubscribe();
  };
  OwlYearViewComponent2.prototype.selectCalendarCell = function(cell) {
    this.selectMonth(cell.value);
  };
  OwlYearViewComponent2.prototype.selectMonth = function(month) {
    var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
    this.monthSelected.emit(firstDateOfMonth);
    var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
    var result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
    this.change.emit(result);
  };
  OwlYearViewComponent2.prototype.handleCalendarKeydown = function(event2) {
    var moment;
    switch (event2.keyCode) {
      case LEFT_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      case RIGHT_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      case UP_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -3);
        this.pickerMomentChange.emit(moment);
        break;
      case DOWN_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 3);
        this.pickerMomentChange.emit(moment);
        break;
      case HOME:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -this.dateTimeAdapter.getMonth(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      case END:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 11 - this.dateTimeAdapter.getMonth(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      case PAGE_UP:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? -10 : -1);
        this.pickerMomentChange.emit(moment);
        break;
      case PAGE_DOWN:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? 10 : 1);
        this.pickerMomentChange.emit(moment);
        break;
      case ENTER:
        this.selectMonth(this.dateTimeAdapter.getMonth(this.pickerMoment));
        this.keyboardEnter.emit();
        break;
      default:
        return;
    }
    this.focusActiveCell();
    event2.preventDefault();
  };
  OwlYearViewComponent2.prototype.generateMonthList = function() {
    if (!this.pickerMoment) {
      return;
    }
    this.setSelectedMonths();
    this.todayMonth = this.getMonthInCurrentYear(this.dateTimeAdapter.now());
    this._months = [];
    for (var i = 0; i < MONTHS_PER_YEAR / MONTHS_PER_ROW; i++) {
      var row = [];
      for (var j = 0; j < MONTHS_PER_ROW; j++) {
        var month = j + i * MONTHS_PER_ROW;
        var monthCell = this.createMonthCell(month);
        row.push(monthCell);
      }
      this._months.push(row);
    }
    return;
  };
  OwlYearViewComponent2.prototype.createMonthCell = function(month) {
    var startDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
    var ariaLabel = this.dateTimeAdapter.format(startDateOfMonth, this.dateTimeFormats.monthYearA11yLabel);
    var cellClass = "owl-dt-month-" + month;
    return new CalendarCell(month, this.monthNames[month], ariaLabel, this.isMonthEnabled(month), false, cellClass);
  };
  OwlYearViewComponent2.prototype.isMonthEnabled = function(month) {
    var firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
    for (var date = firstDateOfMonth; this.dateTimeAdapter.getMonth(date) === month; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
      if (!!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) && (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0)) {
        return true;
      }
    }
    return false;
  };
  OwlYearViewComponent2.prototype.getMonthInCurrentYear = function(date) {
    if (this.getValidDate(date) && this.getValidDate(this._pickerMoment)) {
      var result = this.dateTimeAdapter.compareYear(date, this._pickerMoment);
      if (result < 0) {
        return -1;
      } else if (result > 0) {
        return 12;
      } else {
        return this.dateTimeAdapter.getMonth(date);
      }
    } else {
      return null;
    }
  };
  OwlYearViewComponent2.prototype.setSelectedMonths = function() {
    this.selectedMonths = [];
    if (this.isInSingleMode && this.selected) {
      this.selectedMonths[0] = this.getMonthInCurrentYear(this.selected);
    }
    if (this.isInRangeMode && this.selecteds) {
      this.selectedMonths[0] = this.getMonthInCurrentYear(this.selecteds[0]);
      this.selectedMonths[1] = this.getMonthInCurrentYear(this.selecteds[1]);
    }
  };
  OwlYearViewComponent2.prototype.hasSameYear = function(dateLeft, dateRight) {
    return !!(dateLeft && dateRight && this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight));
  };
  OwlYearViewComponent2.prototype.getValidDate = function(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  };
  OwlYearViewComponent2.prototype.focusActiveCell = function() {
    this.calendarBodyElm.focusActiveCell();
  };
  __decorate14([Input(), __metadata12("design:type", String), __metadata12("design:paramtypes", [String])], OwlYearViewComponent2.prototype, "selectMode", null);
  __decorate14([Input(), __metadata12("design:type", Object), __metadata12("design:paramtypes", [Object])], OwlYearViewComponent2.prototype, "selected", null);
  __decorate14([Input(), __metadata12("design:type", Array), __metadata12("design:paramtypes", [Array])], OwlYearViewComponent2.prototype, "selecteds", null);
  __decorate14([Input(), __metadata12("design:type", Object), __metadata12("design:paramtypes", [Object])], OwlYearViewComponent2.prototype, "pickerMoment", null);
  __decorate14([Input(), __metadata12("design:type", Function), __metadata12("design:paramtypes", [Function])], OwlYearViewComponent2.prototype, "dateFilter", null);
  __decorate14([Input(), __metadata12("design:type", Object), __metadata12("design:paramtypes", [Object])], OwlYearViewComponent2.prototype, "minDate", null);
  __decorate14([Input(), __metadata12("design:type", Object), __metadata12("design:paramtypes", [Object])], OwlYearViewComponent2.prototype, "maxDate", null);
  __decorate14([Output(), __metadata12("design:type", Object)], OwlYearViewComponent2.prototype, "change", void 0);
  __decorate14([Output(), __metadata12("design:type", Object)], OwlYearViewComponent2.prototype, "monthSelected", void 0);
  __decorate14([Output(), __metadata12("design:type", EventEmitter)], OwlYearViewComponent2.prototype, "pickerMomentChange", void 0);
  __decorate14([Output(), __metadata12("design:type", EventEmitter)], OwlYearViewComponent2.prototype, "keyboardEnter", void 0);
  __decorate14([ViewChild(OwlCalendarBodyComponent), __metadata12("design:type", OwlCalendarBodyComponent)], OwlYearViewComponent2.prototype, "calendarBodyElm", void 0);
  __decorate14([HostBinding("class.owl-dt-calendar-view"), __metadata12("design:type", Boolean), __metadata12("design:paramtypes", [])], OwlYearViewComponent2.prototype, "owlDTCalendarView", null);
  OwlYearViewComponent2 = __decorate14([Component({
    selector: "owl-date-time-year-view",
    exportAs: "owlMonthView",
    template: '<table class="owl-dt-calendar-table owl-dt-calendar-year-table"><thead class="owl-dt-calendar-header"><tr><th class="owl-dt-calendar-table-divider" aria-hidden="true" colspan="3"></th></tr></thead><tbody owl-date-time-calendar-body role="grid" [rows]="months" [numCols]="3" [cellRatio]="3 / 7" [activeCell]="activeCell" [todayValue]="todayMonth" [selectedValues]="selectedMonths" [selectMode]="selectMode" (keydown)="handleCalendarKeydown($event)" (select)="selectCalendarCell($event)"></tbody></table>',
    styles: [""],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
  }), __param10(1, Optional()), __param10(2, Optional()), __param10(2, Inject(OWL_DATE_TIME_FORMATS)), __metadata12("design:paramtypes", [ChangeDetectorRef, DateTimeAdapter, Object])], OwlYearViewComponent2);
  return OwlYearViewComponent2;
}();

// node_modules/ng-pick-datetime/date-time/calendar-multi-year-view.component.js
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata13 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param11 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var YEARS_PER_ROW = 3;
var YEAR_ROWS = 7;
var OwlMultiYearViewComponent = function() {
  function OwlMultiYearViewComponent2(cdRef, pickerIntl, dateTimeAdapter) {
    this.cdRef = cdRef;
    this.pickerIntl = pickerIntl;
    this.dateTimeAdapter = dateTimeAdapter;
    this._selectMode = "single";
    this._selecteds = [];
    this.initiated = false;
    this.change = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.pickerMomentChange = new EventEmitter();
    this.keyboardEnter = new EventEmitter();
  }
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "selectMode", {
    get: function() {
      return this._selectMode;
    },
    set: function(val) {
      this._selectMode = val;
      if (this.initiated) {
        this.setSelectedYears();
        this.cdRef.markForCheck();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "selected", {
    get: function() {
      return this._selected;
    },
    set: function(value) {
      var oldSelected = this._selected;
      value = this.dateTimeAdapter.deserialize(value);
      this._selected = this.getValidDate(value);
      if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
        this.setSelectedYears();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "selecteds", {
    get: function() {
      return this._selecteds;
    },
    set: function(values) {
      var _this = this;
      this._selecteds = values.map(function(v) {
        v = _this.dateTimeAdapter.deserialize(v);
        return _this.getValidDate(v);
      });
      this.setSelectedYears();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "pickerMoment", {
    get: function() {
      return this._pickerMoment;
    },
    set: function(value) {
      var oldMoment = this._pickerMoment;
      value = this.dateTimeAdapter.deserialize(value);
      this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
      if (oldMoment && this._pickerMoment && !this.isSameYearList(oldMoment, this._pickerMoment)) {
        this.generateYearList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "dateFilter", {
    get: function() {
      return this._dateFilter;
    },
    set: function(filter2) {
      this._dateFilter = filter2;
      if (this.initiated) {
        this.generateYearList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "minDate", {
    get: function() {
      return this._minDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._minDate = this.getValidDate(value);
      if (this.initiated) {
        this.generateYearList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "maxDate", {
    get: function() {
      return this._maxDate;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      this._maxDate = this.getValidDate(value);
      if (this.initiated) {
        this.generateYearList();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "todayYear", {
    get: function() {
      return this._todayYear;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "years", {
    get: function() {
      return this._years;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "selectedYears", {
    get: function() {
      return this._selectedYears;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "isInSingleMode", {
    get: function() {
      return this.selectMode === "single";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "isInRangeMode", {
    get: function() {
      return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "activeCell", {
    get: function() {
      if (this._pickerMoment) {
        return this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "tableHeader", {
    get: function() {
      if (this._years && this._years.length > 0) {
        return this._years[0][0].displayValue + " ~ " + this._years[YEAR_ROWS - 1][YEARS_PER_ROW - 1].displayValue;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "prevButtonLabel", {
    get: function() {
      return this.pickerIntl.prevMultiYearLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "nextButtonLabel", {
    get: function() {
      return this.pickerIntl.nextMultiYearLabel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "owlDTCalendarView", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlMultiYearViewComponent2.prototype, "owlDTCalendarMultiYearView", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  OwlMultiYearViewComponent2.prototype.ngOnInit = function() {
  };
  OwlMultiYearViewComponent2.prototype.ngAfterContentInit = function() {
    this._todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now());
    this.generateYearList();
    this.initiated = true;
  };
  OwlMultiYearViewComponent2.prototype.selectCalendarCell = function(cell) {
    this.selectYear(cell.value);
  };
  OwlMultiYearViewComponent2.prototype.selectYear = function(year) {
    this.yearSelected.emit(this.dateTimeAdapter.createDate(year, 0, 1));
    var firstDateOfMonth = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), 1);
    var daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
    var selected = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
    this.change.emit(selected);
  };
  OwlMultiYearViewComponent2.prototype.prevYearList = function(event2) {
    this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1 * YEAR_ROWS * YEARS_PER_ROW);
    this.generateYearList();
    event2.preventDefault();
  };
  OwlMultiYearViewComponent2.prototype.nextYearList = function(event2) {
    this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, YEAR_ROWS * YEARS_PER_ROW);
    this.generateYearList();
    event2.preventDefault();
  };
  OwlMultiYearViewComponent2.prototype.generateYearList = function() {
    this._years = [];
    var pickerMomentYear = this.dateTimeAdapter.getYear(this._pickerMoment);
    var offset = pickerMomentYear % (YEARS_PER_ROW * YEAR_ROWS);
    for (var i = 0; i < YEAR_ROWS; i++) {
      var row = [];
      for (var j = 0; j < YEARS_PER_ROW; j++) {
        var year = pickerMomentYear - offset + (j + i * YEARS_PER_ROW);
        var yearCell = this.createYearCell(year);
        row.push(yearCell);
      }
      this._years.push(row);
    }
    return;
  };
  OwlMultiYearViewComponent2.prototype.previousEnabled = function() {
    if (!this.minDate) {
      return true;
    }
    return !this.minDate || !this.isSameYearList(this._pickerMoment, this.minDate);
  };
  OwlMultiYearViewComponent2.prototype.nextEnabled = function() {
    return !this.maxDate || !this.isSameYearList(this._pickerMoment, this.maxDate);
  };
  OwlMultiYearViewComponent2.prototype.handleCalendarKeydown = function(event2) {
    var moment;
    switch (event2.keyCode) {
      case LEFT_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      case RIGHT_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      case UP_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1 * YEARS_PER_ROW);
        this.pickerMomentChange.emit(moment);
        break;
      case DOWN_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW);
        this.pickerMomentChange.emit(moment);
        break;
      case HOME:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS));
        this.pickerMomentChange.emit(moment);
        break;
      case END:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, YEARS_PER_ROW * YEAR_ROWS - this.dateTimeAdapter.getYear(this._pickerMoment) % (YEARS_PER_ROW * YEAR_ROWS) - 1);
        this.pickerMomentChange.emit(moment);
        break;
      case PAGE_UP:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? -10 * (YEARS_PER_ROW * YEAR_ROWS) : -1 * (YEARS_PER_ROW * YEAR_ROWS));
        this.pickerMomentChange.emit(moment);
        break;
      case PAGE_DOWN:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? 10 * (YEARS_PER_ROW * YEAR_ROWS) : YEARS_PER_ROW * YEAR_ROWS);
        this.pickerMomentChange.emit(moment);
        break;
      case ENTER:
        this.selectYear(this.dateTimeAdapter.getYear(this._pickerMoment));
        this.keyboardEnter.emit();
        break;
      default:
        return;
    }
    this.focusActiveCell();
    event2.preventDefault();
  };
  OwlMultiYearViewComponent2.prototype.createYearCell = function(year) {
    var startDateOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
    var ariaLabel = this.dateTimeAdapter.getYearName(startDateOfYear);
    var cellClass = "owl-dt-year-" + year;
    return new CalendarCell(year, year.toString(), ariaLabel, this.isYearEnabled(year), false, cellClass);
  };
  OwlMultiYearViewComponent2.prototype.setSelectedYears = function() {
    var _this = this;
    this._selectedYears = [];
    if (this.isInSingleMode && this.selected) {
      this._selectedYears[0] = this.dateTimeAdapter.getYear(this.selected);
    }
    if (this.isInRangeMode && this.selecteds) {
      this._selectedYears = this.selecteds.map(function(selected) {
        if (_this.dateTimeAdapter.isValid(selected)) {
          return _this.dateTimeAdapter.getYear(selected);
        } else {
          return null;
        }
      });
    }
  };
  OwlMultiYearViewComponent2.prototype.isYearEnabled = function(year) {
    if (year === void 0 || year === null || this.maxDate && year > this.dateTimeAdapter.getYear(this.maxDate) || this.minDate && year < this.dateTimeAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    var firstOfYear = this.dateTimeAdapter.createDate(year, 0, 1);
    for (var date = firstOfYear; this.dateTimeAdapter.getYear(date) == year; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  };
  OwlMultiYearViewComponent2.prototype.isSameYearList = function(date1, date2) {
    return Math.floor(this.dateTimeAdapter.getYear(date1) / (YEARS_PER_ROW * YEAR_ROWS)) === Math.floor(this.dateTimeAdapter.getYear(date2) / (YEARS_PER_ROW * YEAR_ROWS));
  };
  OwlMultiYearViewComponent2.prototype.getValidDate = function(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  };
  OwlMultiYearViewComponent2.prototype.focusActiveCell = function() {
    this.calendarBodyElm.focusActiveCell();
  };
  __decorate15([Input(), __metadata13("design:type", String), __metadata13("design:paramtypes", [String])], OwlMultiYearViewComponent2.prototype, "selectMode", null);
  __decorate15([Input(), __metadata13("design:type", Object), __metadata13("design:paramtypes", [Object])], OwlMultiYearViewComponent2.prototype, "selected", null);
  __decorate15([Input(), __metadata13("design:type", Array), __metadata13("design:paramtypes", [Array])], OwlMultiYearViewComponent2.prototype, "selecteds", null);
  __decorate15([Input(), __metadata13("design:type", Object), __metadata13("design:paramtypes", [Object])], OwlMultiYearViewComponent2.prototype, "pickerMoment", null);
  __decorate15([Input(), __metadata13("design:type", Function), __metadata13("design:paramtypes", [Function])], OwlMultiYearViewComponent2.prototype, "dateFilter", null);
  __decorate15([Input(), __metadata13("design:type", Object), __metadata13("design:paramtypes", [Object])], OwlMultiYearViewComponent2.prototype, "minDate", null);
  __decorate15([Input(), __metadata13("design:type", Object), __metadata13("design:paramtypes", [Object])], OwlMultiYearViewComponent2.prototype, "maxDate", null);
  __decorate15([Output(), __metadata13("design:type", Object)], OwlMultiYearViewComponent2.prototype, "change", void 0);
  __decorate15([Output(), __metadata13("design:type", Object)], OwlMultiYearViewComponent2.prototype, "yearSelected", void 0);
  __decorate15([Output(), __metadata13("design:type", EventEmitter)], OwlMultiYearViewComponent2.prototype, "pickerMomentChange", void 0);
  __decorate15([Output(), __metadata13("design:type", EventEmitter)], OwlMultiYearViewComponent2.prototype, "keyboardEnter", void 0);
  __decorate15([ViewChild(OwlCalendarBodyComponent), __metadata13("design:type", OwlCalendarBodyComponent)], OwlMultiYearViewComponent2.prototype, "calendarBodyElm", void 0);
  __decorate15([HostBinding("class.owl-dt-calendar-view"), __metadata13("design:type", Boolean), __metadata13("design:paramtypes", [])], OwlMultiYearViewComponent2.prototype, "owlDTCalendarView", null);
  __decorate15([HostBinding("class.owl-dt-calendar-multi-year-view"), __metadata13("design:type", Boolean), __metadata13("design:paramtypes", [])], OwlMultiYearViewComponent2.prototype, "owlDTCalendarMultiYearView", null);
  OwlMultiYearViewComponent2 = __decorate15([Component({
    selector: "owl-date-time-multi-year-view",
    template: '<button class="owl-dt-control-button owl-dt-control-arrow-button" [disabled]="!previousEnabled()" [attr.aria-label]="prevButtonLabel" type="button" tabindex="0" (click)="prevYearList($event)"><span class="owl-dt-control-button-content" tabindex="-1"><!-- <editor-fold desc="SVG Arrow Left"> --> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 250.738 250.738" style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve" width="100%" height="100%"><path style="fill-rule: evenodd; clip-rule: evenodd;" d="M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z"/></svg><!-- </editor-fold> --></span></button><table class="owl-dt-calendar-table owl-dt-calendar-multi-year-table"><thead class="owl-dt-calendar-header"><tr><th colspan="3">{{tableHeader}}</th></tr></thead><tbody owl-date-time-calendar-body role="grid" [rows]="years" [numCols]="3" [cellRatio]="3 / 7" [activeCell]="activeCell" [todayValue]="todayYear" [selectedValues]="selectedYears" [selectMode]="selectMode" (keydown)="handleCalendarKeydown($event)" (select)="selectCalendarCell($event)"></tbody></table><button class="owl-dt-control-button owl-dt-control-arrow-button" [disabled]="!nextEnabled()" [attr.aria-label]="nextButtonLabel" type="button" tabindex="0" (click)="nextYearList($event)"><span class="owl-dt-control-button-content" tabindex="-1"><!-- <editor-fold desc="SVG Arrow Right"> --> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250.738 250.738" style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                C197.237,120.447,195.534,115.448,191.75,111.689z"/></svg><!-- </editor-fold> --></span></button>',
    styles: [""],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
  }), __param11(2, Optional()), __metadata13("design:paramtypes", [ChangeDetectorRef, OwlDateTimeIntl, DateTimeAdapter])], OwlMultiYearViewComponent2);
  return OwlMultiYearViewComponent2;
}();

// node_modules/ng-pick-datetime/date-time/timer-box.component.js
var __decorate16 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata14 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OwlTimerBoxComponent = function() {
  function OwlTimerBoxComponent2() {
    this.showDivider = false;
    this.step = 1;
    this.valueChange = new EventEmitter();
    this.inputChange = new EventEmitter();
    this.inputStream = new Subject();
    this.inputStreamSub = Subscription.EMPTY;
  }
  Object.defineProperty(OwlTimerBoxComponent2.prototype, "displayValue", {
    get: function() {
      return this.boxValue || this.value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlTimerBoxComponent2.prototype, "owlDTTimerBoxClass", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  OwlTimerBoxComponent2.prototype.ngOnInit = function() {
    var _this = this;
    this.inputStreamSub = this.inputStream.pipe(debounceTime(500), distinctUntilChanged()).subscribe(function(val) {
      if (val) {
        var inputValue = coerceNumberProperty(val, 0);
        _this.updateValueViaInput(inputValue);
      }
    });
  };
  OwlTimerBoxComponent2.prototype.ngOnDestroy = function() {
    this.inputStreamSub.unsubscribe();
  };
  OwlTimerBoxComponent2.prototype.upBtnClicked = function() {
    this.updateValue(this.value + this.step);
  };
  OwlTimerBoxComponent2.prototype.downBtnClicked = function() {
    this.updateValue(this.value - this.step);
  };
  OwlTimerBoxComponent2.prototype.handleInputChange = function(val) {
    this.inputStream.next(val);
  };
  OwlTimerBoxComponent2.prototype.updateValue = function(value) {
    this.valueChange.emit(value);
  };
  OwlTimerBoxComponent2.prototype.updateValueViaInput = function(value) {
    if (value > this.max || value < this.min) {
      return;
    }
    this.inputChange.emit(value);
  };
  __decorate16([Input(), __metadata14("design:type", Object)], OwlTimerBoxComponent2.prototype, "showDivider", void 0);
  __decorate16([Input(), __metadata14("design:type", String)], OwlTimerBoxComponent2.prototype, "upBtnAriaLabel", void 0);
  __decorate16([Input(), __metadata14("design:type", Boolean)], OwlTimerBoxComponent2.prototype, "upBtnDisabled", void 0);
  __decorate16([Input(), __metadata14("design:type", String)], OwlTimerBoxComponent2.prototype, "downBtnAriaLabel", void 0);
  __decorate16([Input(), __metadata14("design:type", Boolean)], OwlTimerBoxComponent2.prototype, "downBtnDisabled", void 0);
  __decorate16([Input(), __metadata14("design:type", Number)], OwlTimerBoxComponent2.prototype, "boxValue", void 0);
  __decorate16([Input(), __metadata14("design:type", Number)], OwlTimerBoxComponent2.prototype, "value", void 0);
  __decorate16([Input(), __metadata14("design:type", Number)], OwlTimerBoxComponent2.prototype, "min", void 0);
  __decorate16([Input(), __metadata14("design:type", Number)], OwlTimerBoxComponent2.prototype, "max", void 0);
  __decorate16([Input(), __metadata14("design:type", Object)], OwlTimerBoxComponent2.prototype, "step", void 0);
  __decorate16([Input(), __metadata14("design:type", String)], OwlTimerBoxComponent2.prototype, "inputLabel", void 0);
  __decorate16([Output(), __metadata14("design:type", Object)], OwlTimerBoxComponent2.prototype, "valueChange", void 0);
  __decorate16([Output(), __metadata14("design:type", Object)], OwlTimerBoxComponent2.prototype, "inputChange", void 0);
  __decorate16([HostBinding("class.owl-dt-timer-box"), __metadata14("design:type", Boolean), __metadata14("design:paramtypes", [])], OwlTimerBoxComponent2.prototype, "owlDTTimerBoxClass", null);
  OwlTimerBoxComponent2 = __decorate16([Component({
    exportAs: "owlDateTimeTimerBox",
    selector: "owl-date-time-timer-box",
    template: '<div *ngIf="showDivider" class="owl-dt-timer-divider" aria-hidden="true"></div><button class="owl-dt-control-button owl-dt-control-arrow-button" type="button" tabindex="-1" [disabled]="upBtnDisabled" [attr.aria-label]="upBtnAriaLabel" (click)="upBtnClicked()"><span class="owl-dt-control-button-content" tabindex="-1"><!-- <editor-fold desc="SVG Arrow Up"> --> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 451.847 451.846" style="enable-background:new 0 0 451.847 451.846;" xml:space="preserve" width="100%" height="100%"><path d="M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"/></svg><!-- </editor-fold> --></span></button><label class="owl-dt-timer-content"><input class="owl-dt-timer-input" maxlength="2" [value]="displayValue | numberFixedLen : 2" (input)="handleInputChange(valueInput.value)" #valueInput> <span class="owl-hidden-accessible">{{inputLabel}}</span></label><button class="owl-dt-control-button owl-dt-control-arrow-button" type="button" tabindex="-1" [disabled]="downBtnDisabled" [attr.aria-label]="downBtnAriaLabel" (click)="downBtnClicked()"><span class="owl-dt-control-button-content" tabindex="-1"><!-- <editor-fold desc="SVG Arrow Down"> --> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 451.847 451.846" style="enable-background:new 0 0 451.847 451.846;" xml:space="preserve" width="100%" height="100%"><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></svg><!-- </editor-fold> --></span></button>',
    styles: [""],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush
  }), __metadata14("design:paramtypes", [])], OwlTimerBoxComponent2);
  return OwlTimerBoxComponent2;
}();

// node_modules/ng-pick-datetime/date-time/numberedFixLen.pipe.js
var __decorate17 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NumberFixedLenPipe = function() {
  function NumberFixedLenPipe2() {
  }
  NumberFixedLenPipe2.prototype.transform = function(num, len) {
    var number = Math.floor(num);
    var length = Math.floor(len);
    if (num === null || isNaN(number) || isNaN(length)) {
      return num;
    }
    var numString = number.toString();
    while (numString.length < length) {
      numString = "0" + numString;
    }
    return numString;
  };
  NumberFixedLenPipe2 = __decorate17([Pipe({
    name: "numberFixedLen"
  })], NumberFixedLenPipe2);
  return NumberFixedLenPipe2;
}();

// node_modules/ng-pick-datetime/date-time/date-time-inline.component.js
var __extends3 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate18 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata15 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param12 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var OWL_DATETIME_VALUE_ACCESSOR2 = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(function() {
    return OwlDateTimeInlineComponent;
  }),
  multi: true
};
var OwlDateTimeInlineComponent = function(_super) {
  __extends3(OwlDateTimeInlineComponent2, _super);
  function OwlDateTimeInlineComponent2(changeDetector, dateTimeAdapter, dateTimeFormats) {
    var _this = _super.call(this, dateTimeAdapter, dateTimeFormats) || this;
    _this.changeDetector = changeDetector;
    _this.dateTimeAdapter = dateTimeAdapter;
    _this.dateTimeFormats = dateTimeFormats;
    _this._pickerType = "both";
    _this._disabled = false;
    _this._selectMode = "single";
    _this._values = [];
    _this.yearSelected = new EventEmitter();
    _this.monthSelected = new EventEmitter();
    _this._selecteds = [];
    _this.onModelChange = function() {
    };
    _this.onModelTouched = function() {
    };
    return _this;
  }
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "pickerType", {
    get: function() {
      return this._pickerType;
    },
    set: function(val) {
      if (val !== this._pickerType) {
        this._pickerType = val;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "disabled", {
    get: function() {
      return !!this._disabled;
    },
    set: function(value) {
      this._disabled = coerceBooleanProperty(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "selectMode", {
    get: function() {
      return this._selectMode;
    },
    set: function(mode) {
      if (mode !== "single" && mode !== "range" && mode !== "rangeFrom" && mode !== "rangeTo") {
        throw Error("OwlDateTime Error: invalid selectMode value!");
      }
      this._selectMode = mode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "startAt", {
    get: function() {
      if (this._startAt) {
        return this._startAt;
      }
      if (this.selectMode === "single") {
        return this.value || null;
      } else if (this.selectMode === "range" || this.selectMode === "rangeFrom") {
        return this.values[0] || null;
      } else if (this.selectMode === "rangeTo") {
        return this.values[1] || null;
      } else {
        return null;
      }
    },
    set: function(date) {
      this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "dateTimeFilter", {
    get: function() {
      return this._dateTimeFilter;
    },
    set: function(filter2) {
      this._dateTimeFilter = filter2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "minDateTime", {
    get: function() {
      return this._min || null;
    },
    set: function(value) {
      this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
      this.changeDetector.markForCheck();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "maxDateTime", {
    get: function() {
      return this._max || null;
    },
    set: function(value) {
      this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
      this.changeDetector.markForCheck();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "value", {
    get: function() {
      return this._value;
    },
    set: function(value) {
      value = this.dateTimeAdapter.deserialize(value);
      value = this.getValidDate(value);
      this._value = value;
      this.selected = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "values", {
    get: function() {
      return this._values;
    },
    set: function(values) {
      var _this = this;
      if (values && values.length > 0) {
        values = values.map(function(v) {
          v = _this.dateTimeAdapter.deserialize(v);
          v = _this.getValidDate(v);
          return v ? _this.dateTimeAdapter.clone(v) : null;
        });
        this._values = values.slice();
        this.selecteds = values.slice();
      } else {
        this._values = [];
        this.selecteds = [];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "selected", {
    get: function() {
      return this._selected;
    },
    set: function(value) {
      this._selected = value;
      this.changeDetector.markForCheck();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "selecteds", {
    get: function() {
      return this._selecteds;
    },
    set: function(values) {
      this._selecteds = values;
      this.changeDetector.markForCheck();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "opened", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "pickerMode", {
    get: function() {
      return "inline";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "isInSingleMode", {
    get: function() {
      return this._selectMode === "single";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "isInRangeMode", {
    get: function() {
      return this._selectMode === "range" || this._selectMode === "rangeFrom" || this._selectMode === "rangeTo";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwlDateTimeInlineComponent2.prototype, "owlDTInlineClass", {
    get: function() {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  OwlDateTimeInlineComponent2.prototype.ngOnInit = function() {
    this.container.picker = this;
  };
  OwlDateTimeInlineComponent2.prototype.writeValue = function(value) {
    if (this.isInSingleMode) {
      this.value = value;
      this.container.pickerMoment = value;
    } else {
      this.values = value;
      this.container.pickerMoment = this._values[this.container.activeSelectedIndex];
    }
  };
  OwlDateTimeInlineComponent2.prototype.registerOnChange = function(fn) {
    this.onModelChange = fn;
  };
  OwlDateTimeInlineComponent2.prototype.registerOnTouched = function(fn) {
    this.onModelTouched = fn;
  };
  OwlDateTimeInlineComponent2.prototype.setDisabledState = function(isDisabled) {
    this.disabled = isDisabled;
  };
  OwlDateTimeInlineComponent2.prototype.select = function(date) {
    if (this.disabled) {
      return;
    }
    if (Array.isArray(date)) {
      this.values = date.slice();
    } else {
      this.value = date;
    }
    this.onModelChange(date);
    this.onModelTouched();
  };
  OwlDateTimeInlineComponent2.prototype.selectYear = function(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  };
  OwlDateTimeInlineComponent2.prototype.selectMonth = function(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  };
  __decorate18([ViewChild(OwlDateTimeContainerComponent), __metadata15("design:type", OwlDateTimeContainerComponent)], OwlDateTimeInlineComponent2.prototype, "container", void 0);
  __decorate18([Input(), __metadata15("design:type", String), __metadata15("design:paramtypes", [String])], OwlDateTimeInlineComponent2.prototype, "pickerType", null);
  __decorate18([Input(), __metadata15("design:type", Boolean), __metadata15("design:paramtypes", [Boolean])], OwlDateTimeInlineComponent2.prototype, "disabled", null);
  __decorate18([Input(), __metadata15("design:type", String), __metadata15("design:paramtypes", [String])], OwlDateTimeInlineComponent2.prototype, "selectMode", null);
  __decorate18([Input(), __metadata15("design:type", Object), __metadata15("design:paramtypes", [Object])], OwlDateTimeInlineComponent2.prototype, "startAt", null);
  __decorate18([Input("owlDateTimeFilter"), __metadata15("design:type", Function), __metadata15("design:paramtypes", [Function])], OwlDateTimeInlineComponent2.prototype, "dateTimeFilter", null);
  __decorate18([Input("min"), __metadata15("design:type", Object), __metadata15("design:paramtypes", [Object])], OwlDateTimeInlineComponent2.prototype, "minDateTime", null);
  __decorate18([Input("max"), __metadata15("design:type", Object), __metadata15("design:paramtypes", [Object])], OwlDateTimeInlineComponent2.prototype, "maxDateTime", null);
  __decorate18([Input(), __metadata15("design:type", Object), __metadata15("design:paramtypes", [Object])], OwlDateTimeInlineComponent2.prototype, "value", null);
  __decorate18([Input(), __metadata15("design:type", Array), __metadata15("design:paramtypes", [Array])], OwlDateTimeInlineComponent2.prototype, "values", null);
  __decorate18([Output(), __metadata15("design:type", Object)], OwlDateTimeInlineComponent2.prototype, "yearSelected", void 0);
  __decorate18([Output(), __metadata15("design:type", Object)], OwlDateTimeInlineComponent2.prototype, "monthSelected", void 0);
  __decorate18([HostBinding("class.owl-dt-inline"), __metadata15("design:type", Boolean), __metadata15("design:paramtypes", [])], OwlDateTimeInlineComponent2.prototype, "owlDTInlineClass", null);
  OwlDateTimeInlineComponent2 = __decorate18([Component({
    selector: "owl-date-time-inline",
    template: "<owl-date-time-container></owl-date-time-container>",
    styles: [""],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    providers: [OWL_DATETIME_VALUE_ACCESSOR2]
  }), __param12(1, Optional()), __param12(2, Optional()), __param12(2, Inject(OWL_DATE_TIME_FORMATS)), __metadata15("design:paramtypes", [ChangeDetectorRef, DateTimeAdapter, Object])], OwlDateTimeInlineComponent2);
  return OwlDateTimeInlineComponent2;
}(OwlDateTime);

// node_modules/ng-pick-datetime/date-time/date-time.module.js
var __decorate19 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OwlDateTimeModule = function() {
  function OwlDateTimeModule2() {
  }
  OwlDateTimeModule2 = __decorate19([NgModule({
    imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule],
    exports: [OwlCalendarComponent, OwlTimerComponent, OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeInlineComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent],
    declarations: [OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeContainerComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent, OwlTimerComponent, OwlTimerBoxComponent, OwlCalendarComponent, OwlCalendarBodyComponent, NumberFixedLenPipe, OwlDateTimeInlineComponent],
    providers: [OwlDateTimeIntl, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER],
    entryComponents: [OwlDateTimeContainerComponent]
  })], OwlDateTimeModule2);
  return OwlDateTimeModule2;
}();

// node_modules/ng-pick-datetime/date-time/adapter/native-date-time-adapter.class.js
var __extends4 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __decorate20 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata16 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param13 = function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var DEFAULT_MONTH_NAMES = {
  "long": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  "narrow": ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
};
var DEFAULT_DAY_OF_WEEK_NAMES = {
  "long": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "narrow": ["S", "M", "T", "W", "T", "F", "S"]
};
var ɵ0 = function(i) {
  return String(i + 1);
};
var DEFAULT_DATE_NAMES = range(31, ɵ0);
var SUPPORTS_INTL_API = typeof Intl !== "undefined";
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  var valuesArray = Array(length);
  for (var i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateTimeAdapter = function(_super) {
  __extends4(NativeDateTimeAdapter2, _super);
  function NativeDateTimeAdapter2(owlDateTimeLocale, platform) {
    var _this = _super.call(this) || this;
    _this.owlDateTimeLocale = owlDateTimeLocale;
    _super.prototype.setLocale.call(_this, owlDateTimeLocale);
    _this.useUtcForDisplay = !platform.TRIDENT;
    _this._clampDate = platform.TRIDENT || platform.EDGE;
    return _this;
  }
  NativeDateTimeAdapter2.prototype.getYear = function(date) {
    return date.getFullYear();
  };
  NativeDateTimeAdapter2.prototype.getMonth = function(date) {
    return date.getMonth();
  };
  NativeDateTimeAdapter2.prototype.getDay = function(date) {
    return date.getDay();
  };
  NativeDateTimeAdapter2.prototype.getDate = function(date) {
    return date.getDate();
  };
  NativeDateTimeAdapter2.prototype.getHours = function(date) {
    return date.getHours();
  };
  NativeDateTimeAdapter2.prototype.getMinutes = function(date) {
    return date.getMinutes();
  };
  NativeDateTimeAdapter2.prototype.getSeconds = function(date) {
    return date.getSeconds();
  };
  NativeDateTimeAdapter2.prototype.getTime = function(date) {
    return date.getTime();
  };
  NativeDateTimeAdapter2.prototype.getNumDaysInMonth = function(date) {
    var lastDateOfMonth = this.createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0);
    return this.getDate(lastDateOfMonth);
  };
  NativeDateTimeAdapter2.prototype.differenceInCalendarDays = function(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      var dateLeftStartOfDay = this.createDate(this.getYear(dateLeft), this.getMonth(dateLeft), this.getDate(dateLeft));
      var dateRightStartOfDay = this.createDate(this.getYear(dateRight), this.getMonth(dateRight), this.getDate(dateRight));
      var timeStampLeft = this.getTime(dateLeftStartOfDay) - dateLeftStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
      var timeStampRight = this.getTime(dateRightStartOfDay) - dateRightStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
      return Math.round((timeStampLeft - timeStampRight) / this.millisecondsInDay);
    } else {
      return null;
    }
  };
  NativeDateTimeAdapter2.prototype.getYearName = function(date) {
    if (SUPPORTS_INTL_API) {
      var dtf = new Intl.DateTimeFormat(this.locale, {
        year: "numeric",
        timeZone: "utc"
      });
      return this.stripDirectionalityCharacters(this._format(dtf, date));
    }
    return String(this.getYear(date));
  };
  NativeDateTimeAdapter2.prototype.getMonthNames = function(style2) {
    var _this = this;
    if (SUPPORTS_INTL_API) {
      var dtf_1 = new Intl.DateTimeFormat(this.locale, {
        month: style2,
        timeZone: "utc"
      });
      return range(12, function(i) {
        return _this.stripDirectionalityCharacters(_this._format(dtf_1, new Date(2017, i, 1)));
      });
    }
    return DEFAULT_MONTH_NAMES[style2];
  };
  NativeDateTimeAdapter2.prototype.getDayOfWeekNames = function(style2) {
    var _this = this;
    if (SUPPORTS_INTL_API) {
      var dtf_2 = new Intl.DateTimeFormat(this.locale, {
        weekday: style2,
        timeZone: "utc"
      });
      return range(7, function(i) {
        return _this.stripDirectionalityCharacters(_this._format(dtf_2, new Date(2017, 0, i + 1)));
      });
    }
    return DEFAULT_DAY_OF_WEEK_NAMES[style2];
  };
  NativeDateTimeAdapter2.prototype.getDateNames = function() {
    var _this = this;
    if (SUPPORTS_INTL_API) {
      var dtf_3 = new Intl.DateTimeFormat(this.locale, {
        day: "numeric",
        timeZone: "utc"
      });
      return range(31, function(i) {
        return _this.stripDirectionalityCharacters(_this._format(dtf_3, new Date(2017, 0, i + 1)));
      });
    }
    return DEFAULT_DATE_NAMES;
  };
  NativeDateTimeAdapter2.prototype.toIso8601 = function(date) {
    return date.toISOString();
  };
  NativeDateTimeAdapter2.prototype.isEqual = function(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      return dateLeft.getTime() === dateRight.getTime();
    } else {
      return false;
    }
  };
  NativeDateTimeAdapter2.prototype.isSameDay = function(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      var dateLeftStartOfDay = this.clone(dateLeft);
      var dateRightStartOfDay = this.clone(dateRight);
      dateLeftStartOfDay.setHours(0, 0, 0, 0);
      dateRightStartOfDay.setHours(0, 0, 0, 0);
      return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
    } else {
      return false;
    }
  };
  NativeDateTimeAdapter2.prototype.isValid = function(date) {
    return date && !isNaN(date.getTime());
  };
  NativeDateTimeAdapter2.prototype.invalid = function() {
    return /* @__PURE__ */ new Date(NaN);
  };
  NativeDateTimeAdapter2.prototype.isDateInstance = function(obj) {
    return obj instanceof Date;
  };
  NativeDateTimeAdapter2.prototype.addCalendarYears = function(date, amount) {
    return this.addCalendarMonths(date, amount * 12);
  };
  NativeDateTimeAdapter2.prototype.addCalendarMonths = function(date, amount) {
    var result = this.clone(date);
    amount = Number(amount);
    var desiredMonth = result.getMonth() + amount;
    var dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
    dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    var daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth);
    result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()));
    return result;
  };
  NativeDateTimeAdapter2.prototype.addCalendarDays = function(date, amount) {
    var result = this.clone(date);
    amount = Number(amount);
    result.setDate(result.getDate() + amount);
    return result;
  };
  NativeDateTimeAdapter2.prototype.setHours = function(date, amount) {
    var result = this.clone(date);
    result.setHours(amount);
    return result;
  };
  NativeDateTimeAdapter2.prototype.setMinutes = function(date, amount) {
    var result = this.clone(date);
    result.setMinutes(amount);
    return result;
  };
  NativeDateTimeAdapter2.prototype.setSeconds = function(date, amount) {
    var result = this.clone(date);
    result.setSeconds(amount);
    return result;
  };
  NativeDateTimeAdapter2.prototype.createDate = function(year, month, date, hours, minutes, seconds) {
    if (hours === void 0) {
      hours = 0;
    }
    if (minutes === void 0) {
      minutes = 0;
    }
    if (seconds === void 0) {
      seconds = 0;
    }
    if (month < 0 || month > 11) {
      throw Error('Invalid month index "' + month + '". Month index has to be between 0 and 11.');
    }
    if (date < 1) {
      throw Error('Invalid date "' + date + '". Date has to be greater than 0.');
    }
    if (hours < 0 || hours > 23) {
      throw Error('Invalid hours "' + hours + '". Hours has to be between 0 and 23.');
    }
    if (minutes < 0 || minutes > 59) {
      throw Error('Invalid minutes "' + minutes + '". Minutes has to between 0 and 59.');
    }
    if (seconds < 0 || seconds > 59) {
      throw Error('Invalid seconds "' + seconds + '". Seconds has to be between 0 and 59.');
    }
    var result = this.createDateWithOverflow(year, month, date, hours, minutes, seconds);
    if (result.getMonth() !== month) {
      throw Error('Invalid date "' + date + '" for month with index "' + month + '".');
    }
    return result;
  };
  NativeDateTimeAdapter2.prototype.clone = function(date) {
    return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date), this.getMinutes(date), this.getSeconds(date));
  };
  NativeDateTimeAdapter2.prototype.now = function() {
    return /* @__PURE__ */ new Date();
  };
  NativeDateTimeAdapter2.prototype.format = function(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("JSNativeDate: Cannot format invalid date.");
    }
    if (SUPPORTS_INTL_API) {
      if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
        date = this.clone(date);
        date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
      }
      displayFormat = __assign({}, displayFormat, {
        timeZone: "utc"
      });
      var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
      return this.stripDirectionalityCharacters(this._format(dtf, date));
    }
    return this.stripDirectionalityCharacters(date.toDateString());
  };
  NativeDateTimeAdapter2.prototype.parse = function(value, parseFormat) {
    if (typeof value === "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  };
  NativeDateTimeAdapter2.prototype.deserialize = function(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        var date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return _super.prototype.deserialize.call(this, value);
  };
  NativeDateTimeAdapter2.prototype.createDateWithOverflow = function(year, month, date, hours, minutes, seconds) {
    if (hours === void 0) {
      hours = 0;
    }
    if (minutes === void 0) {
      minutes = 0;
    }
    if (seconds === void 0) {
      seconds = 0;
    }
    var result = new Date(year, month, date, hours, minutes, seconds);
    if (year >= 0 && year < 100) {
      result.setFullYear(this.getYear(result) - 1900);
    }
    return result;
  };
  NativeDateTimeAdapter2.prototype.stripDirectionalityCharacters = function(str) {
    return str.replace(/[\u200e\u200f]/g, "");
  };
  NativeDateTimeAdapter2.prototype._format = function(dtf, date) {
    var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    return dtf.format(d);
  };
  NativeDateTimeAdapter2 = __decorate20([Injectable(), __param13(0, Optional()), __param13(0, Inject(OWL_DATE_TIME_LOCALE)), __metadata16("design:paramtypes", [String, Platform])], NativeDateTimeAdapter2);
  return NativeDateTimeAdapter2;
}(DateTimeAdapter);

// node_modules/ng-pick-datetime/date-time/adapter/native-date-time-format.class.js
var OWL_NATIVE_DATE_TIME_FORMATS = {
  parseInput: null,
  fullPickerInput: {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  },
  datePickerInput: {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  },
  timePickerInput: {
    hour: "numeric",
    minute: "numeric"
  },
  monthYearLabel: {
    year: "numeric",
    month: "short"
  },
  dateA11yLabel: {
    year: "numeric",
    month: "long",
    day: "numeric"
  },
  monthYearA11yLabel: {
    year: "numeric",
    month: "long"
  }
};

// node_modules/ng-pick-datetime/date-time/adapter/native-date-time.module.js
var __decorate21 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NativeDateTimeModule = function() {
  function NativeDateTimeModule2() {
  }
  NativeDateTimeModule2 = __decorate21([NgModule({
    imports: [PlatformModule],
    providers: [{
      provide: DateTimeAdapter,
      useClass: NativeDateTimeAdapter
    }]
  })], NativeDateTimeModule2);
  return NativeDateTimeModule2;
}();
var ɵ02 = OWL_NATIVE_DATE_TIME_FORMATS;
var OwlNativeDateTimeModule = function() {
  function OwlNativeDateTimeModule2() {
  }
  OwlNativeDateTimeModule2 = __decorate21([NgModule({
    imports: [NativeDateTimeModule],
    providers: [{
      provide: OWL_DATE_TIME_FORMATS,
      useValue: ɵ02
    }]
  })], OwlNativeDateTimeModule2);
  return OwlNativeDateTimeModule2;
}();
export {
  DateTimeAdapter,
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE,
  OWL_DATE_TIME_LOCALE_PROVIDER,
  OwlDateTimeComponent,
  OwlDateTimeInlineComponent,
  OwlDateTimeIntl,
  OwlDateTimeModule,
  OwlNativeDateTimeModule
};
//# sourceMappingURL=ng-pick-datetime.js.map
