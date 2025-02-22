package com.canvas.springboot.utils;

import java.nio.charset.StandardCharsets;

public class Constants {
    public static final String SIGNING_KEY="SFjI6p6uYL1u3OQZEZ0t7nq5DT0Jil2vn2+2bY30bBc=";
    public static final long JWT_TOKEN_VALIDITY_MS=10 * 60 * 1000;
    public static final byte[] SIGNING_KEY_BYTES = SIGNING_KEY.getBytes(StandardCharsets.UTF_8);
}