import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:8000/api';

export const requests = {
    get: (url) => 
        superagent
            .get(`${API_ROOT}${url}`)
            .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NjYyNzI0OTEsImV4cCI6MTU2NjI3NjA5MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWRtaW5AZ21haWwuY29tIn0.cEWuLRp3J2K4cbHImnrRviSaBF4vwZbCBhA5jOS2nCnEZxP-L8-qEU2caP4i4BLSs4hzOXTABUguz52yWnG5_2XLR4xdfu8HT4e4UzCngZ50suCGGMN3cbU1nEx6ZG6IhhBl2CGi9HiqFrl9nso36FeCGlaEonMKXFs9NrLdmiN5xmZ_aaeUz4ScRR67MtyJsENIbLa5oD3clqzkGhVt2YCWoemHIRpCBO0to7_E9_5B5Fe6PoXJIvmcHfFyHPwooBZmZgZISNVAsb4cUBmpHUO_lJpjzN7TPx9O_6xaCzYuBQm-gvN0yvPiO1peVmpr99BjxTrhzdDopnikJ1R-Nwew9bMfUtmOG4hKhoiJj9slDCvZISXmVFUJby6pWS_kuigTkVYWjO30qOG4cHXnoyKzqZ_lS3vhM9v1bn6idYkTwASVblmym-_I028LMoFx6pGjQjwIwD30vjrOfzPnBeYb2OPYvRU23CBcFcwa7YQJ59aMaZg6n7lxa4xgofw_yKPcV4lLqsFajqGG_kzhvPWca7BIw3CyJT6cEcJhBE7IFAguNRCBUmGPa-IwxPgbGP4RmMulpmdg3c-tIFO_cUxNTgLrblvT4ADzAwdHnlAeFzFSm1xLcrlZvWx9u1aYdBm8-hBXN3bkYqsdX9Oa7UdokLdSDDVqqavo3LijQx4')
}
