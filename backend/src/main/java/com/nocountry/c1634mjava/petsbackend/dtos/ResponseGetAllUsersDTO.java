package com.nocountry.c1634mjava.petsbackend.dtos;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ResponseGetAllUsersDTO {

    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
    private boolean last;
    private ResponseUserProfileDTO[] content;

}
