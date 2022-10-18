
class NoUserManager {
    showUser() {
        const userRespository: NoUserRepository = new NoUserRepository();
        const user: NoUser = userRespository.getUser(1);
        console.log(user.getEmail());
    }
}
