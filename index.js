const Typium = new (class {
  #data = {};

  add(obj) {
    if (
      typeof obj.name !== "string" ||
      obj.value === undefined ||
      !obj.type
    ) return;

    const exists = this.#data[obj.name];

    if (!exists) {
      this.#data[obj.name] = { value: obj.value, type: obj.type };
    } else {
      if (obj.overrideValue === 1) {
        if (obj.overrideType === 1) {
          if (obj.value instanceof obj.type) {
            this.#data[obj.name] = { value: obj.value, type: obj.type };
          } else {
            this.#data[obj.name] = {
              value: this.#wrapValue(obj.value, obj.type),
              type: obj.type
            };
          }
        } else {
          if (obj.value instanceof exists.type) {
            this.#data[obj.name].value = obj.value;
          } else {
            this.#data[obj.name].value = this.#wrapValue(obj.value, exists.type);
          }
        }
      }
    }
  }

  #wrapValue(value, type) {
    if (type === String) return new String(value);
    if (type === Number) return new Number(value);
    if (type === Boolean) return new Boolean(value);
    return value;
  }

  get(name) {
    const entry = this.#data[name];
    if (!entry) return undefined;

    const { value, type } = entry;
    if ([String, Number, Boolean].includes(type)) {
      return value.valueOf();
    }
    return value;
  }

  set(name, val) {
    const entry = this.#data[name];
    if (!entry) return;

    const { type } = entry;

    if (val instanceof type) {
      entry.value = val;
    } else {
      entry.value = this.#wrapValue(val, type);
    }
  }
})();
