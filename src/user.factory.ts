
class UserFactory {
    static create(): IUserRepository {
        return new UserLocalRepository();
    }
}
