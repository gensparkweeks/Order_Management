package manage.orderback.service;
import manage.orderback.model.UserInfo;
import java.util.List;

public interface UserInfoService {

    List<UserInfo> findAll();
    UserInfo findById(int id);
    UserInfo create(UserInfo userInfo);
    UserInfo update(UserInfo userInfo);
    void delete(int id);
    UserInfo findByUserId(int id);
}
