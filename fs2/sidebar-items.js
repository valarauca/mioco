initSidebarItems({"fn":[["allocation_granularity","Returns the filesystem's disk space allocation granularity in bytes. The provided path may be for any file in the filesystem.On Posix, this is equivalent to the filesystem's block size. On Windows, this is equivalent to the filesystem's cluster size."],["available_space","Returns the available space in bytes to non-priveleged users in the file system containing the provided path."],["free_space","Returns the number of free bytes in the file system containing the provided path."],["lock_contended_error","Returns the error that a call to a try lock method on a contended file will return."],["total_space","Returns the total space in bytes in the file system containing the provided path."]],"trait":[["FileExt","Extension trait for `File` providing duplication and locking methods.Notes on File LocksThis library provides whole-file locks in both shared (read) and exclusive (read-write) varieties.File locks are a cross-platform hazard since the file lock APIs exposed by operating system kernels vary in subtle and not-so-subtle ways.The API exposed by this library can be safely used across platforms as long as the following rules are followed:Multiple locks should not be created on an individual `File` instance concurrently. Duplicated files should not be locked without great care. Files to be locked should be opened with at least read or write permissions. File locks may only be relied upon to be advisory. See the tests in `lib.rs` for cross-platform lock behavior that may be relied upon; see the tests in `unix.rs` and `windows.rs` for examples of platform-specific behavior. File locks are implemented with `flock(2)` on Unix and `LockFile` on Windows."]]});