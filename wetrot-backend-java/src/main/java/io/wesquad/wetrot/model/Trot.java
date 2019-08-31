package io.wesquad.wetrot.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Document(value = "trot")
public class Trot {
    private UUID uid;
    private String name;
    private int currentBatteryLevel;
    private int batteryCapacity;
    private String localization;
    private String brand;
    private int usury;
    private int wearLife;
}
