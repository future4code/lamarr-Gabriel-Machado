export const goToListTrips = (navigate) => {
    navigate('/trips/list')
}
export const goToBack = (navigate) => {
    navigate(-1)
}
export const goToApplicationForm = (navigate) => {
    navigate('/trips/application')
}
export const goToLogin = (navigate) => {
    navigate('/login')
}
export const goToAdminHome = (navigate) => {
    navigate('/admin/trips/list')
}
export const goToTripDetails = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}
export const goToCreateTrip = (navigate) => {
    navigate('/admin/trips/create')
}