export const getPartnerInfo = (email, users) => {
    const partner = users.find(user => user.email !== email)
    return partner
}