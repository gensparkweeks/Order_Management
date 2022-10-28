package manage.orderback.controller;
import manage.orderback.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("upload")
public class UploadController {

    @Autowired
    private UploadService uploadService;

    @PostMapping
    public void uploadFile(@RequestParam("file0")MultipartFile file){
        uploadService.uploadFile(file);
    }
}
