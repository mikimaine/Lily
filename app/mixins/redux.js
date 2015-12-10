import store from './../redux/store';

/**
 * a mixin that subscribes to redux store and updates our data
 * so that Vue can do its magic
 */
const data = {
  data() {
    return {
      store: store.getState()
    };
  },
  created() {
    this.unsubscribe = store.subscribe(() => {
      this.store = store.getState();
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};

/*
 * props mixin that gets the store from parent
 */
const props = {
  props: {
    store: {
      type: Object,
      required: true,
      twoWay: false,
      default() {return {};}
    }
  }
};

exports.data = data;
exports.props = props;