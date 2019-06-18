package cucumber.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.wesquad.wetrot.model.Trot;
import io.wesquad.wetrot.model.User;
import lombok.extern.java.Log;
import org.assertj.core.api.Assertions;
import org.springframework.boot.web.server.LocalServerPort;

@Log
public class StepdefsTrotCreation {

    @LocalServerPort
    private int port;

    private String baseUrl = "http://localhost:" + port;
    private StepDefsContext context = StepDefsContext.CONTEXT;

    @Given("an admin user existing in the system")
    public void an_admin_user_existing_in_the_system() {
        User user = User.builder().username("tatata").firstname("Kong").lastname("To").email("newlight77@gmail.com").age(42).build();
        context.givenObject(user);
    }

    @Given("a Trot of brand (.*)")
    public void a_Trot_of_brand_Xiaomi(String brand) {
        Trot trot = Trot.builder().name("first trot").brand(brand)
                .batteryCapacity(5500).currentBatteryLevel(2000)
                .wearLevel(0).wearLife(990).build();
        context.givenObject(trot);
    }

    @When("he want to create a trot")
    public void he_want_to_create_a_trot() {

        final String url = baseUrl + port + "/api/v1/trots";

        Response response = RestAssured.given().log()
                .all()
                .when()
                .contentType(ContentType.JSON)
                .body(context.givenObject(Trot.class))
                .post(url)
                .andReturn();

        response.then()
                .log()
                .all();

        context.response(response);
    }

    @Then("the trot is created")
    public void the_trot_is_created() {
        Trot trot = context.result(Trot.class);
        Assertions.assertThat(trot).isNotNull();
        Assertions.assertThat(trot.getBrand()).isEqualTo("Xiaomi");
    }
}
