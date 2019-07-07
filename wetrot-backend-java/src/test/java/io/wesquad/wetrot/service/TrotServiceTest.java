package io.wesquad.wetrot.service;

import io.wesquad.wetrot.model.Trot;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

public class TrotServiceTest {

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
        TrotService service = new TrotService();

        // act
        Trot created = service.create(trot);

        // assert
        Assertions.assertThat(created.getUid()).isNotNull();
    }
}