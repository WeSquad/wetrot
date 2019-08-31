package io.wesquad.wetrot.repository;

import io.wesquad.wetrot.model.Trot;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import java.util.UUID;

public interface TrotRepository extends ReactiveMongoRepository<Trot, UUID> {
}
