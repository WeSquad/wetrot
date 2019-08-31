package cucumber.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.wesquad.wetrot.model.Trot;
import io.wesquad.wetrot.model.User;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.BodyInserters;

import java.util.UUID;

@Log
public class StepdefsTrotDelete {

    @LocalServerPort
    private int port;

    @Autowired
    private WebTestClient webClient;

    private StepDefsContext context = StepDefsContext.CONTEXT;

    @Given("the trot id is (.*)")
    public void the_trot_id_is(String uuid) {
        Trot trot = context.givenObject(Trot.class);
        trot.setUid(UUID.fromString(uuid));
    }

    @When("he want to delete a trot with name (.*)")
    public void he_want_to_delete_a_trot_with_it_s_name_trot(String name) {
        WebTestClient.ResponseSpec response = webClient
                .delete()
                .uri("/api/v1/trots/" + name)
                .exchange();
        context.thenObject(response, WebTestClient.ResponseSpec.class);
    }

    @Then("the trot is deleted")
    public void the_trot_is_deleted() {
        WebTestClient.ResponseSpec response = context.thenObject(WebTestClient.ResponseSpec.class);
        response.expectStatus()
                .isOk()
                .expectHeader()
                .contentType(MediaType.APPLICATION_JSON_UTF8);
    }
}
