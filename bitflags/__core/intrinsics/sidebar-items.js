initSidebarItems({"fn":[["abort","Aborts the execution of the process."],["add_with_overflow","Performs checked integer addition."],["arith_offset","Calculates the offset from a pointer, potentially wrapping."],["assume","Informs the optimizer that a condition is always true. If the condition is false, the behavior is undefined."],["atomic_and",""],["atomic_and_acq",""],["atomic_and_acqrel",""],["atomic_and_rel",""],["atomic_and_relaxed",""],["atomic_cxchg",""],["atomic_cxchg_acq",""],["atomic_cxchg_acq_failrelaxed",""],["atomic_cxchg_acqrel",""],["atomic_cxchg_acqrel_failrelaxed",""],["atomic_cxchg_failacq",""],["atomic_cxchg_failrelaxed",""],["atomic_cxchg_rel",""],["atomic_cxchg_relaxed",""],["atomic_cxchgweak",""],["atomic_cxchgweak_acq",""],["atomic_cxchgweak_acq_failrelaxed",""],["atomic_cxchgweak_acqrel",""],["atomic_cxchgweak_acqrel_failrelaxed",""],["atomic_cxchgweak_failacq",""],["atomic_cxchgweak_failrelaxed",""],["atomic_cxchgweak_rel",""],["atomic_cxchgweak_relaxed",""],["atomic_fence",""],["atomic_fence_acq",""],["atomic_fence_acqrel",""],["atomic_fence_rel",""],["atomic_load",""],["atomic_load_acq",""],["atomic_load_relaxed",""],["atomic_load_unordered",""],["atomic_max",""],["atomic_max_acq",""],["atomic_max_acqrel",""],["atomic_max_rel",""],["atomic_max_relaxed",""],["atomic_min",""],["atomic_min_acq",""],["atomic_min_acqrel",""],["atomic_min_rel",""],["atomic_min_relaxed",""],["atomic_nand",""],["atomic_nand_acq",""],["atomic_nand_acqrel",""],["atomic_nand_rel",""],["atomic_nand_relaxed",""],["atomic_or",""],["atomic_or_acq",""],["atomic_or_acqrel",""],["atomic_or_rel",""],["atomic_or_relaxed",""],["atomic_singlethreadfence","A compiler-only memory barrier."],["atomic_singlethreadfence_acq",""],["atomic_singlethreadfence_acqrel",""],["atomic_singlethreadfence_rel",""],["atomic_store",""],["atomic_store_rel",""],["atomic_store_relaxed",""],["atomic_store_unordered",""],["atomic_umax",""],["atomic_umax_acq",""],["atomic_umax_acqrel",""],["atomic_umax_rel",""],["atomic_umax_relaxed",""],["atomic_umin",""],["atomic_umin_acq",""],["atomic_umin_acqrel",""],["atomic_umin_rel",""],["atomic_umin_relaxed",""],["atomic_xadd",""],["atomic_xadd_acq",""],["atomic_xadd_acqrel",""],["atomic_xadd_rel",""],["atomic_xadd_relaxed",""],["atomic_xchg",""],["atomic_xchg_acq",""],["atomic_xchg_acqrel",""],["atomic_xchg_rel",""],["atomic_xchg_relaxed",""],["atomic_xor",""],["atomic_xor_acq",""],["atomic_xor_acqrel",""],["atomic_xor_rel",""],["atomic_xor_relaxed",""],["atomic_xsub",""],["atomic_xsub_acq",""],["atomic_xsub_acqrel",""],["atomic_xsub_rel",""],["atomic_xsub_relaxed",""],["breakpoint","Executes a breakpoint trap, for inspection by a debugger."],["bswap","Reverses the bytes in an integer type `T`."],["ceilf32","Returns the smallest integer greater than or equal to an `f32`."],["ceilf64","Returns the smallest integer greater than or equal to an `f64`."],["copy","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may overlap."],["copy_nonoverlapping","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may *not* overlap."],["copysignf32","Copies the sign from `y` to `x` for `f32` values."],["copysignf64","Copies the sign from `y` to `x` for `f64` values."],["cosf32","Returns the cosine of an `f32`."],["cosf64","Returns the cosine of an `f64`."],["ctlz","Returns the number of leading bits unset in an integer type `T`"],["ctpop","Returns the number of bits set in an integer type `T`"],["cttz","Returns the number of trailing bits unset in an integer type `T`"],["discriminant_value","Returns the value of the discriminant for the variant in 'v', cast to a `u64`; if `T` has no discriminant, returns 0."],["drop_in_place","Executes the destructor (if any) of the pointed-to value."],["exp2f32","Returns 2 raised to the power of an `f32`."],["exp2f64","Returns 2 raised to the power of an `f64`."],["expf32","Returns the exponential of an `f32`."],["expf64","Returns the exponential of an `f64`."],["fabsf32","Returns the absolute value of an `f32`."],["fabsf64","Returns the absolute value of an `f64`."],["floorf32","Returns the largest integer less than or equal to an `f32`."],["floorf64","Returns the largest integer less than or equal to an `f64`."],["fmaf32","Returns `a * b + c` for `f32` values."],["fmaf64","Returns `a * b + c` for `f64` values."],["forget","Moves a value out of scope without running drop glue."],["init","Creates a value initialized to zero."],["init_dropped","Creates a value initialized to so that its drop flag, if any, says that it has been dropped."],["log10f32","Returns the base 10 logarithm of an `f32`."],["log10f64","Returns the base 10 logarithm of an `f64`."],["log2f32","Returns the base 2 logarithm of an `f32`."],["log2f64","Returns the base 2 logarithm of an `f64`."],["logf32","Returns the natural logarithm of an `f32`."],["logf64","Returns the natural logarithm of an `f64`."],["min_align_of",""],["min_align_of_val",""],["move_val_init","Moves a value to an uninitialized memory location."],["mul_with_overflow","Performs checked integer multiplication"],["nearbyintf32","Returns the nearest integer to an `f32`."],["nearbyintf64","Returns the nearest integer to an `f64`."],["needs_drop","Returns `true` if the actual type given as `T` requires drop glue; returns `false` if the actual type provided for `T` implements `Copy`."],["offset","Calculates the offset from a pointer."],["overflowing_add","Returns (a + b) mod 2^N, where N is the width of T in bits."],["overflowing_mul","Returns (a * b) mod 2^N, where N is the width of T in bits."],["overflowing_sub","Returns (a - b) mod 2^N, where N is the width of T in bits."],["powf32","Raises an `f32` to an `f32` power."],["powf64","Raises an `f64` to an `f64` power."],["powif32","Raises an `f32` to an integer power."],["powif64","Raises an `f64` to an integer power."],["pref_align_of",""],["return_address","Gives the address for the return value of the enclosing function."],["rintf32","Returns the nearest integer to an `f32`. May raise an inexact floating-point exception if the argument is not an integer."],["rintf64","Returns the nearest integer to an `f64`. May raise an inexact floating-point exception if the argument is not an integer."],["roundf32","Returns the nearest integer to an `f32`. Rounds half-way cases away from zero."],["roundf64","Returns the nearest integer to an `f64`. Rounds half-way cases away from zero."],["sinf32","Returns the sine of an `f32`."],["sinf64","Returns the sine of an `f64`."],["size_of","The size of a type in bytes."],["size_of_val",""],["sqrtf32","Returns the square root of an `f32`"],["sqrtf64","Returns the square root of an `f64`"],["sub_with_overflow","Performs checked integer subtraction"],["transmute","Unsafely transforms a value of one type into a value of another type."],["truncf32","Returns the integer part of an `f32`."],["truncf64","Returns the integer part of an `f64`."],["try","Rust's \"try catch\" construct which invokes the function pointer `f` with the data pointer `data`."],["type_id","Gets an identifier which is globally unique to the specified type. This function will return the same value for a type regardless of whichever crate it is invoked in."],["type_name","Gets a static string slice containing the name of a type."],["unchecked_div","Performs an unchecked division, resulting in undefined behavior where y = 0 or x = `T::min_value()` and y = -1"],["unchecked_rem","Returns the remainder of an unchecked division, resulting in undefined behavior where y = 0 or x = `T::min_value()` and y = -1"],["uninit","Creates an uninitialized value."],["unreachable","Tells LLVM that this point in the code is not reachable, enabling further optimizations."],["volatile_copy_memory","Equivalent to the appropriate `llvm.memmove.p0i8.0i8.*` intrinsic, with a size of `count` * `size_of::<T>()` and an alignment of `min_align_of::<T>()`"],["volatile_copy_nonoverlapping_memory","Equivalent to the appropriate `llvm.memcpy.p0i8.0i8.*` intrinsic, with a size of `count` * `size_of::<T>()` and an alignment of `min_align_of::<T>()`"],["volatile_load","Perform a volatile load from the `src` pointer."],["volatile_set_memory","Equivalent to the appropriate `llvm.memset.p0i8.*` intrinsic, with a size of `count` * `size_of::<T>()` and an alignment of `min_align_of::<T>()`."],["volatile_store","Perform a volatile store to the `dst` pointer."],["write_bytes","Invokes memset on the specified pointer, setting `count * size_of::<T>()` bytes of memory starting at `dst` to `val`."]]});