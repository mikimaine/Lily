import $ from 'jquery';
import moment from 'moment';
require('eonasdan-bootstrap-datetimepicker');

module.exports = {
  install(Vue) {
    Vue.component('dateTime', {
      name: 'date',
      props: {
        model: {
          type: String,
          required: true,
          twoWay: true
        },
        format: {
          type: String,
          required: false,
          twoWay: false,
          default: 'DD-MM-YYYY hh:mm A'
        },
        required: {
          type: Boolean,
          required: false,
          twoWay: false,
          default: false
        }
      },
      template: `<input type="text">`,
      ready() {
        /**
         * on initial binding
         * if: valid format and value is passed, it'll be initiated to that
         * else: now will be used to initiate, which will also be reflected back
         */
        if(moment(this.model, this.format).isValid() === true) {
          this.$el.value = this.model;
        } else if (this.required === true) {
          let now = moment().format(this.format);
          this.$el.value = now;
          this.model = now;
        }

        this.__dateTimeInstance = $(this.$el).datetimepicker({
          format: this.format,
          sideBySide: true
        });

        this.__dateTimeInstance.on('dp.change', (value) => {
          if (moment(value.date, this.format).isValid() === true) {
            this.model = value.date.format(this.format);
          }
        });
      },
      beforeDestroy() {
        this.__dateTimeInstance.data('DateTimePicker').destroy();
      },
      watch: {
        /**
         * BEFORE you roll your eyes at me, hear moi out
         *
         * we're ONLY watching "outside" changes to "reflect" the change on the RAW input
         * that's it! --- it won't trigger 'dp.change' or anything so it
         * wont lead us into infinite loop or anything
         */
        model(newVal) {
          this.$el.value = newVal;
        }
      }
    });
  }
};
