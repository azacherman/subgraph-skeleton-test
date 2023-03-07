// TODO move this type to a common library
export interface Result<T> {
    success: boolean;
    message?: string; // populated when success is false
    data?: T; // populated when success is true
}
