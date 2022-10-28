package manage.orderback.service;
import org.springframework.web.multipart.MultipartFile;

public interface UploadService {

    void uploadFile(MultipartFile file);
}
