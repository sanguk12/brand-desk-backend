package config.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.auth0.jwt.interfaces.Verification;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.io.UnsupportedEncodingException;

public class JwtTokenUtil {
    protected final Log log = LogFactory.getLog(getClass());

    /**
     * create token
     *
     * @throws UnsupportedEncodingException
     * @throws IllegalArgumentException
     */
    public static String createToken(String secret, Long id) {
        // to set algorithm
        Algorithm algorithm = Algorithm.HMAC256(secret);
        // payload
        String token = JWT.create().withClaim("userId", id).sign(algorithm);
        return token;
    }

    /**
     * @param token
     * @return
     */
    public static  Long decodeToken(String secret, String token) {
        try {
            // for verification algorithm
            Verification verification = JWT.require(Algorithm.HMAC256(secret));
            JWTVerifier jwtverifier = verification.build();
            // to decode token
            DecodedJWT decodedjwt = jwtverifier.verify(token);

            Claim claim = decodedjwt.getClaim("userId");
            return claim.asLong();
        }catch(Exception e)
        {
        }
        return null;
    }
}
