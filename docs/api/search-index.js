var N = null;var searchIndex = {};
searchIndex["simple_redis"]={"doc":"simple_redis","items":[[5,"create","simple_redis","Constructs a new redis client. The redis connection string must be in the following format: `redis://[:<passwd>@]<hostname>[:port][/<db>]`",N,[[["str"]],["result",["client","rediserror"]]]],[0,"client","","client",N,N],[3,"Client","simple_redis::client","The redis client which enables to invoke redis operations.",N,N],[5,"create","","Constructs a new redis client. The redis connection string must be in the following format: `redis://[:<passwd>@]<hostname>[:port][/<db>]`",N,[[["str"]],["result",["client","rediserror"]]]],[11,"is_connection_open","","Returns true if the currently stored connection is valid, otherwise false. There is no need to call this function as any redis operation invocation will ensure a valid connection is created.",0,[[["client"]],["bool"]]],[11,"quit","","Closes the internal connection to redis. The client can still be reused and any invocation of other operations after this call, will reopen the connection. See redis QUIT command.",0,[[["client"]],["redisemptyresult"]]],[11,"run_command","","Invokes the requested command with the provided arguments (all provided via args) and returns the operation response. This function ensures that we have a valid connection and it is used internally by all other exposed commands. This function is also public to enable invoking operations that are not directly exposed by the client.",0,[[["client"],["str"],["vec",["str"]]],["redisresult"]]],[11,"run_command_from_string_response","","invokes the run_command and returns typed result",0,[[["client"],["str"],["vec",["str"]]],["redisresult"]]],[11,"run_command_empty_response","","invokes the run_command but returns empty result",0,[[["client"],["str"],["vec",["str"]]],["redisemptyresult"]]],[11,"run_command_string_response","","invokes the run_command but returns string result",0,[[["client"],["str"],["vec",["str"]]],["redisstringresult"]]],[11,"run_command_bool_response","","invokes the run_command but returns bool result",0,[[["client"],["str"],["vec",["str"]]],["redisboolresult"]]],[11,"subscribe","","Subscribes to the provided channel. Actual subscription only occurs at the first call to get_message.",0,[[["client"],["str"]],["redisemptyresult"]]],[11,"psubscribe","","Subscribes to the provided channel pattern. Actual subscription only occurs at the first call to get_message.",0,[[["client"],["str"]],["redisemptyresult"]]],[11,"is_subscribed","","Returns true if subscribed to the provided channel.",0,[[["client"],["str"]],["bool"]]],[11,"is_psubscribed","","Returns true if subscribed to the provided channel pattern.",0,[[["client"],["str"]],["bool"]]],[11,"unsubscribe","","Unsubscribes from the provided channel.",0,[[["client"],["str"]],["redisemptyresult"]]],[11,"punsubscribe","","Unsubscribes from the provided channel pattern.",0,[[["client"],["str"]],["redisemptyresult"]]],[11,"unsubscribe_all","","Unsubscribes from all channels.",0,[[["client"]],["redisemptyresult"]]],[11,"get_message","","Fetches the next message from any of the subscribed channels. This function will return a TimeoutError in case no message was read in the provided timeout value (defined in millies). If the provided timeout value is 0, there will be no timeout and the call will block until a message is read or a connection error happens.",0,[[["client"],["u64"]],["redismessageresult"]]],[11,"auth","","See redis AUTH command.",0,[[["self"],["str"]],["redisemptyresult"]]],[11,"echo","","See redis ECHO command.",0,[[["self"],["str"]],["redisstringresult"]]],[11,"publish","","See redis PUBLISH command.",0,[[["self"],["str"],["str"]],["redisemptyresult"]]],[11,"get","","See redis GET command.",0,[[["client"],["str"]],["redisresult"]]],[11,"get_string","","See redis GET command. This function will always return a String response.",0,[[["client"],["str"]],["redisstringresult"]]],[11,"set","","See redis SET command.",0,[[["client"],["str"],["t"]],["redisemptyresult"]]],[11,"setex","","See redis SETEX command.",0,[[["self"],["str"],["t"],["usize"]],["redisemptyresult"]]],[11,"setnx","","See redis SETNX command.",0,[[["self"],["str"],["t"]],["redisemptyresult"]]],[11,"getset","","See redis GETSET command.",0,[[["self"],["str"],["t"]],["redisresult"]]],[11,"getset_string","","See redis GETSET command.",0,[[["self"],["str"],["t"]],["redisstringresult"]]],[11,"del","","See redis DEL command.",0,[[["self"],["str"]],["redisemptyresult"]]],[11,"exists","","See redis EXISTS command.",0,[[["self"],["str"]],["redisboolresult"]]],[11,"expire","","See redis EXPIRE command.",0,[[["self"],["str"],["usize"]],["redisemptyresult"]]],[11,"pexpire","","See redis PEXPIRE command.",0,[[["self"],["str"],["usize"]],["redisemptyresult"]]],[11,"persist","","See redis PERSIST command.",0,[[["self"],["str"]],["redisemptyresult"]]],[11,"rename","","See redis RENAME command.",0,[[["self"],["str"],["str"]],["redisemptyresult"]]],[11,"renamenx","","See redis RENAMENX command.",0,[[["self"],["str"],["str"]],["redisemptyresult"]]],[11,"append","","See redis APPEND command.",0,[[["self"],["str"],["str"]],["redisemptyresult"]]],[11,"incr","","See redis INCR command.",0,[[["self"],["str"]],["redisresult",["i64"]]]],[11,"incrby","","See redis INCRBY command.",0,[[["self"],["str"],["t"]],["redisresult",["i64"]]]],[11,"incrbyfloat","","See redis INCRBYFLOAT command.",0,[[["self"],["str"],["t"]],["redisresult",["f64"]]]],[11,"strlen","","See redis STRLEN command.",0,[[["self"],["str"]],["redisresult",["i32"]]]],[11,"keys","","See redis KEYS command.",0,[[["self"],["str"]],["redisresult",["vec"]]]],[11,"hget","","See redis HGET command.",0,[[["client"],["str"],["str"]],["redisresult"]]],[11,"hget_string","","See redis HGET command.",0,[[["client"],["str"],["str"]],["redisstringresult"]]],[11,"hgetall","","See redis HGETALL command.",0,[[["client"],["str"]],["redisresult",["hashmap"]]]],[11,"hset","","See redis HSET command.",0,[[["client"],["str"],["str"],["t"]],["redisemptyresult"]]],[11,"hsetnx","","See redis HSETNX command.",0,[[["client"],["str"],["str"],["t"]],["redisemptyresult"]]],[11,"hdel","","See redis HDEL command.",0,[[["client"],["str"],["str"]],["redisemptyresult"]]],[11,"hexists","","See redis HEXISTS command.",0,[[["client"],["str"],["str"]],["redisboolresult"]]],[11,"hkeys","","See redis HKEYS command.",0,[[["self"],["str"]],["redisresult",["vec"]]]],[11,"hvals","","See redis HVALS command.",0,[[["self"],["str"]],["redisresult",["vec"]]]],[11,"lset","","See redis LSET command.",0,[[["client"],["str"],["isize"],["t"]],["redisemptyresult"]]],[11,"lindex","","See redis HGET command.",0,[[["client"],["str"],["isize"]],["redisresult"]]],[11,"lindex_string","","See redis HGET command.",0,[[["client"],["str"],["isize"]],["redisstringresult"]]],[11,"llen","","See redis LLEN command.",0,[[["client"],["str"]],["redisresult",["i32"]]]],[11,"lpop","","See redis LPOP command.",0,[[["client"],["str"]],["redisresult"]]],[11,"lpush","","See redis LPUSH command.",0,[[["client"],["str"],["t"]],["redisemptyresult"]]],[11,"lpushx","","See redis LPUSHX command.",0,[[["client"],["str"],["t"]],["redisemptyresult"]]],[11,"lrange","","See redis LRANGE command.",0,[[["client"],["str"],["isize"],["isize"]],["redisresult",["vec"]]]],[11,"lrem","","See redis LREM command.",0,[[["client"],["str"],["isize"],["t"]],["redisemptyresult"]]],[11,"ltrim","","See redis LTRIM command.",0,[[["client"],["str"],["isize"],["isize"]],["redisemptyresult"]]],[11,"rpop","","See redis RPOP command.",0,[[["client"],["str"]],["redisresult"]]],[11,"rpush","","See redis RPUSH command.",0,[[["client"],["str"],["t"]],["redisemptyresult"]]],[11,"rpushx","","See redis RPUSHX command.",0,[[["client"],["str"],["t"]],["redisemptyresult"]]],[11,"sadd","","See redis SADD command.",0,[[["client"],["str"],["str"]],["redisresult",["i32"]]]],[11,"scard","","See redis SCARD command.",0,[[["client"],["str"]],["redisresult",["i32"]]]],[11,"sdiff","","See redis SDIFF command.",0,[[["client"],["vec",["str"]]],["redisresult",["vec"]]]],[11,"sismember","","See redis SISMEMBER command.",0,[[["client"],["str"],["str"]],["redisboolresult"]]],[11,"smembers","","See redis SMEMBERS command.",0,[[["client"],["str"]],["redisresult",["vec"]]]],[11,"smove","","See redis SMOVE command.",0,[[["client"],["str"],["str"],["str"]],["redisemptyresult"]]],[11,"srem","","See redis SREM command.",0,[[["client"],["str"],["str"]],["redisemptyresult"]]],[0,"types","simple_redis","types",N,N],[3,"RedisError","simple_redis::types","Redis Error struct",N,N],[12,"info","","Holds the error information",1,N],[4,"ErrorInfo","","Holds the error information",N,N],[13,"RedisError","","Root redis error",2,N],[13,"Description","","Description text of the error reason",2,N],[13,"TimeoutError","","TimeoutError error",2,N],[6,"Message","","PubSub message",N,N],[6,"RedisResult","","Redis result which either holds a value or a Redis error",N,N],[6,"RedisEmptyResult","","Holds empty result or error",N,N],[6,"RedisMessageResult","","Holds pubsub message result or error",N,N],[6,"RedisStringResult","","Holds string result or error",N,N],[6,"RedisBoolResult","","Holds bool result or error",N,N],[8,"RedisArg","","Defines a redis command argument",N,N],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"description","","A short description of the error.",1,[[["self"]],["str"]]],[11,"cause","","The lower-level cause of this error, if any.",1,[[["self"]],["option",["error"]]]],[11,"fmt","","Formats the value using the given formatter.",1,[[["self"],["formatter"]],["result",["error"]]]],[6,"RedisError","simple_redis","Error Type",N,N],[6,"ErrorInfo","","Error Info",N,N],[6,"Message","","PubSub message",N,N],[6,"RedisResult","","Redis result which either holds a value or a Redis error",N,N],[11,"from","simple_redis::client","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_string","simple_redis::types","",1,[[["self"]],["string"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]]],"paths":[[3,"Client"],[3,"RedisError"],[4,"ErrorInfo"]]};
initSearch(searchIndex);
