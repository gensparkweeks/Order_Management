package manage.orderback.dao;
import manage.orderback.model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoDao extends JpaRepository<UserInfo, Integer> {

    @Query(
            name="select * from user_info where user_id = ?"
            , nativeQuery = true)
    UserInfo findByUserId(int id);
}
