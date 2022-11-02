package manage.orderback.service;
import manage.orderback.dao.UserInfoDao;
import manage.orderback.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserInfoImpl implements UserInfoService{

    @Autowired
    private UserInfoDao userInfoDao;

    @Override
    public List<UserInfo> findAll() {
        return userInfoDao.findAll();
    }

    @Override
    public UserInfo findById(int id) {
        return userInfoDao.findById(id).orElseThrow();
    }

    @Override
    public UserInfo create(UserInfo userInfo) {
        return userInfoDao.save(userInfo);
    }

    @Override
    public UserInfo update(UserInfo userInfo) {
        return userInfoDao.save(userInfo);
    }

    @Override
    public void delete(int id) {
        userInfoDao.deleteById(id);
    }

    @Override
    public UserInfo findByUserId(int id) {
        return userInfoDao.findByUserId(id);
    }
}
