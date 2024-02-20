package com.nocountry.c1634mjava.petsbackend.utils;

public class Constants {

    public abstract static class Endpoints {

        public static final String BASE = "/api";
        public static final String PETS = BASE + "/pets";

        public static final String ID = "/{id}";

        public static final String PETS_ID = PETS + ID;

        public static final String AUTH = BASE + "/auth";

        public static final String LOGIN = "/login";

        public static final String REGISTER = "/register";
        public static final String AUTH_LOGIN = AUTH + LOGIN;
        public static final String AUTH_REGISTER = AUTH + REGISTER;

        public static final String SWAGGER_UI = "/swagger-ui/**";

        public static final String SWAGGER_CONFIG = "/v3/api-docs/**";
    }

    public abstract static class Roles {
        public static final String ROLE_ADMIN = "ROLE_ADMIN";
        public static final String ROLE_USER = "ROLE_USER";
    }

    public abstract static class Pagination {

        public static final int PAGE_NUMBER = 0;
        public static final int PAGE_SIZE = 10;

    }

}
