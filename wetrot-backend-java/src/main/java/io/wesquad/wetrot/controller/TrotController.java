package io.wesquad.wetrot.controller;

import io.wesquad.wetrot.model.Trot;
import io.wesquad.wetrot.service.TrotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/trots")
public class TrotController {

    @Autowired
    private TrotService trotService;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Trot> create(@RequestBody Trot trot) {
        return trotService.create(trot);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable String id) {
        trotService.delete(UUID.fromString(id));
    }
}
