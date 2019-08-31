package io.wesquad.wetrot.service;

import io.wesquad.wetrot.model.Trot;
import io.wesquad.wetrot.repository.TrotRepository;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.UUID;

@Service
public class TrotService {

    private TrotRepository trotRepository;

    public TrotService(TrotRepository trotRepository) {
        this.trotRepository = trotRepository;
    }

    public Mono<Trot> create(Trot trot) {
        if (trot.getUid() == null) {
            trot.setUid(UUID.randomUUID());
        }
        return trotRepository.save(trot);
    }

}
