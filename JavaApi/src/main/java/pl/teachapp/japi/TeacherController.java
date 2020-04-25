package pl.teachapp.japi;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/japi/sample")
public class TeacherController {

    @CrossOrigin
    @GetMapping("/GetSampleData")
    public String getTeacherName() {
        return "Sample data from Java API";
    }
}
