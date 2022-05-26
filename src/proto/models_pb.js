// source: proto/models.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.models.ProtoTransaction', null, global);
goog.exportSymbol('proto.models.ProtoTransaction.Data', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.models.ProtoTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.models.ProtoTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.models.ProtoTransaction.displayName = 'proto.models.ProtoTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.models.ProtoTransaction.Data = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.models.ProtoTransaction.Data, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.models.ProtoTransaction.Data.displayName = 'proto.models.ProtoTransaction.Data';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.models.ProtoTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.models.ProtoTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.models.ProtoTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.ProtoTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.models.ProtoTransaction.Data.toObject(includeInstance, f),
    signature: msg.getSignature_asB64(),
    userlp: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.models.ProtoTransaction}
 */
proto.models.ProtoTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.models.ProtoTransaction;
  return proto.models.ProtoTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.models.ProtoTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.models.ProtoTransaction}
 */
proto.models.ProtoTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.models.ProtoTransaction.Data;
      reader.readMessage(value,proto.models.ProtoTransaction.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserlp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.models.ProtoTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.models.ProtoTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.ProtoTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.models.ProtoTransaction.Data.serializeBinaryToWriter
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getUserlp();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.models.ProtoTransaction.Data.prototype.toObject = function(opt_includeInstance) {
  return proto.models.ProtoTransaction.Data.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.models.ProtoTransaction.Data} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.ProtoTransaction.Data.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    epoch: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    to: msg.getTo_asB64(),
    amount: msg.getAmount_asB64(),
    maxfee: msg.getMaxfee_asB64(),
    tips: msg.getTips_asB64(),
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.models.ProtoTransaction.Data}
 */
proto.models.ProtoTransaction.Data.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.models.ProtoTransaction.Data;
  return proto.models.ProtoTransaction.Data.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.models.ProtoTransaction.Data} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.models.ProtoTransaction.Data}
 */
proto.models.ProtoTransaction.Data.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEpoch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTo(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMaxfee(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTips(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.Data.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.models.ProtoTransaction.Data.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.models.ProtoTransaction.Data} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.models.ProtoTransaction.Data.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEpoch();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getMaxfee_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getTips_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.models.ProtoTransaction.Data.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 epoch = 2;
 * @return {number}
 */
proto.models.ProtoTransaction.Data.prototype.getEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 type = 3;
 * @return {number}
 */
proto.models.ProtoTransaction.Data.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes to = 4;
 * @return {!(string|Uint8Array)}
 */
proto.models.ProtoTransaction.Data.prototype.getTo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes to = 4;
 * This is a type-conversion wrapper around `getTo()`
 * @return {string}
 */
proto.models.ProtoTransaction.Data.prototype.getTo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTo()));
};


/**
 * optional bytes to = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTo()`
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.Data.prototype.getTo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setTo = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes amount = 5;
 * @return {!(string|Uint8Array)}
 */
proto.models.ProtoTransaction.Data.prototype.getAmount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes amount = 5;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.models.ProtoTransaction.Data.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.Data.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setAmount = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes maxFee = 6;
 * @return {!(string|Uint8Array)}
 */
proto.models.ProtoTransaction.Data.prototype.getMaxfee = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes maxFee = 6;
 * This is a type-conversion wrapper around `getMaxfee()`
 * @return {string}
 */
proto.models.ProtoTransaction.Data.prototype.getMaxfee_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMaxfee()));
};


/**
 * optional bytes maxFee = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMaxfee()`
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.Data.prototype.getMaxfee_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMaxfee()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setMaxfee = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes tips = 7;
 * @return {!(string|Uint8Array)}
 */
proto.models.ProtoTransaction.Data.prototype.getTips = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes tips = 7;
 * This is a type-conversion wrapper around `getTips()`
 * @return {string}
 */
proto.models.ProtoTransaction.Data.prototype.getTips_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTips()));
};


/**
 * optional bytes tips = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTips()`
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.Data.prototype.getTips_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTips()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setTips = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes payload = 8;
 * @return {!(string|Uint8Array)}
 */
proto.models.ProtoTransaction.Data.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes payload = 8;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.models.ProtoTransaction.Data.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.Data.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.models.ProtoTransaction.Data} returns this
 */
proto.models.ProtoTransaction.Data.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional Data data = 1;
 * @return {?proto.models.ProtoTransaction.Data}
 */
proto.models.ProtoTransaction.prototype.getData = function() {
  return /** @type{?proto.models.ProtoTransaction.Data} */ (
    jspb.Message.getWrapperField(this, proto.models.ProtoTransaction.Data, 1));
};


/**
 * @param {?proto.models.ProtoTransaction.Data|undefined} value
 * @return {!proto.models.ProtoTransaction} returns this
*/
proto.models.ProtoTransaction.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.models.ProtoTransaction} returns this
 */
proto.models.ProtoTransaction.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.models.ProtoTransaction.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.models.ProtoTransaction.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.models.ProtoTransaction.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.models.ProtoTransaction.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.models.ProtoTransaction} returns this
 */
proto.models.ProtoTransaction.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool useRlp = 3;
 * @return {boolean}
 */
proto.models.ProtoTransaction.prototype.getUserlp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.models.ProtoTransaction} returns this
 */
proto.models.ProtoTransaction.prototype.setUserlp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.models);