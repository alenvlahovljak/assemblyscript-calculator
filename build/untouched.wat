(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_=>_i64 (func (param i32 i32) (result i64)))
 (memory $0 0)
 (table $0 1 funcref)
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 16392))
 (global $~lib/memory/__heap_base i32 (i32.const 16392))
 (export "add" (func $assembly/index/add))
 (export "subtract" (func $assembly/index/subtract))
 (export "multiply" (func $assembly/index/multiply))
 (export "divide" (func $assembly/index/divide))
 (export "memory" (memory $0))
 (func $assembly/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $assembly/index/subtract (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.sub
 )
 (func $assembly/index/multiply (param $0 i32) (param $1 i32) (result i64)
  local.get $0
  local.get $1
  i32.mul
  i64.extend_i32_s
 )
 (func $assembly/index/divide (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.div_s
 )
)
