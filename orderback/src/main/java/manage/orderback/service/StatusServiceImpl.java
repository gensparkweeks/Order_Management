package manage.orderback.service;
import manage.orderback.dao.StatusDao;
import manage.orderback.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StatusServiceImpl implements StatusService{

    @Autowired
    StatusDao statusDao;

    @Override
    public List<Status> findAll() {
        return statusDao.findAll();
    }

    @Override
    public Status findById(int id) {
        return statusDao.findById(id).orElseThrow();
    }

    @Override
    public Status create(Status status) {
        return statusDao.save(status);
    }

    @Override
    public Status update(Status status) {
        return statusDao.save(status);
    }

    @Override
    public void delete(int id) {
        statusDao.deleteById(id);
    }
}
