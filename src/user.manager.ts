
class UserManager {
    showUser() {
        const userRespository: IUserRepository = UserFactory.create();
        const user: User = userRespository.getUser(1);
        console.log(user.getEmail());
    }
}
