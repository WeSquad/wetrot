package io.wesquad.wetrot.service;

import com.mongodb.Mongo;
import io.wesquad.wetrot.model.Trot;
import io.wesquad.wetrot.repository.TrotRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

public class TrotServiceTest {
    TrotRepository repositoryMock = Mockito.mock(TrotRepository.class);
    TrotService service = new TrotService(repositoryMock);

    @Test
    void create() {
        // arrange
        Trot trot = Trot.builder()
                .name("myFirstTrot")
                .brand("wesquad")
                .localization("Paris")
                .batteryCapacity(100)
                .currentBatteryLevel(50)
                .usury(3)
                .wearLife(60)
                .build();
        Mockito.when(repositoryMock.save(trot)).thenReturn(Mono.just(trot));

        // act
        Mono<Trot> created = service.create(trot);

        // assert
        Assertions.assertThat(created.block().getUid()).isNotNull();
    }

    @Test
    void delete() {

        fail();
    }
}