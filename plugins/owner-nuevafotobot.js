function _0x31ac(_0x16c31d, _0x391554) {
    const _0x14c2c6 = _0x14c2();
    return _0x31ac = function (_0x31ac59, _0x41e1db) {
        _0x31ac59 = _0x31ac59 - 0x1b1;
        let _0x1c6184 = _0x14c2c6[_0x31ac59];
        return _0x1c6184;
    }, _0x31ac(_0x16c31d, _0x391554);
}
const _0x34771d = _0x31ac;
(function (_0x8d3321, _0x5019dd) {
    const _0x36e927 = _0x31ac
        , _0x211e28 = _0x8d3321();
    while (!![]) {
        try {
            const _0x500528 = parseInt(_0x36e927(0x1ca)) / 0x1 + -parseInt(_0x36e927(0x1b4)) / 0x2 + -parseInt(_0x36e927(0x1b9)) / 0x3 + parseInt(_0x36e927(0x1c3)) / 0x4 * (-parseInt(_0x36e927(0x1b6)) / 0x5) + -parseInt(_0x36e927(0x1cc)) / 0x6 * (-parseInt(_0x36e927(0x1cd)) / 0x7) + parseInt(_0x36e927(0x1d0)) / 0x8 * (parseInt(_0x36e927(0x1ce)) / 0x9) + -parseInt(_0x36e927(0x1bd)) / 0xa * (-parseInt(_0x36e927(0x1b5)) / 0xb);
            if (_0x500528 === _0x5019dd) break;
            else _0x211e28['push'](_0x211e28['shift']());
        } catch (_0x9b5c64) {
            _0x211e28['push'](_0x211e28['shift']());
        }
    }
}(_0x14c2, 0xb4aad));
import _0x29cf90 from 'jimp';
let handler = async (_0x55976e, {
    conn: _0x14ced5
    , usedPrefix: _0x33d1e6
    , command: _0x480711
    , args: _0x4bb196
    , isOwner: _0x5a3d5e
    , isAdmin: _0x1410d6
    , isROwner: _0x18371c
}) => {
    const _0x2359c0 = _0x31ac;
    try {
        let _0x2538c6 = _0x14ced5[_0x2359c0(0x1c2)][_0x2359c0(0x1b2)]
            , _0xf17176 = _0x55976e[_0x2359c0(0x1bb)] ? _0x55976e['quoted'] : _0x55976e;
        if (!_0x55976e[_0x2359c0(0x1bb)]) return _0x55976e.reply('🤍 Responde a una *Imagen.*')
        let _0x353a82 = (_0xf17176[_0x2359c0(0x1b1)] || _0xf17176)[_0x2359c0(0x1cf)] || '';
        var _0x434471 = await _0xf17176[_0x2359c0(0x1ba)]();
        let _0x3aeaf4 = await _0x2538c6;
        async function _0x4d2c5f(_0x2e4ee1) {
            const _0x398c4c = _0x2359c0
                , _0x5e6130 = await _0x29cf90[_0x398c4c(0x1c9)](_0x2e4ee1)
                , _0x1347f7 = _0x5e6130[_0x398c4c(0x1b7)]() > _0x5e6130[_0x398c4c(0x1c4)]() ? _0x5e6130['resize'](0x2d0, _0x29cf90[_0x398c4c(0x1c1)]) : _0x5e6130[_0x398c4c(0x1be)](_0x29cf90[_0x398c4c(0x1c1)], 0x2d0)
                , _0x17aa09 = await _0x29cf90[_0x398c4c(0x1c9)](await _0x1347f7[_0x398c4c(0x1c5)](_0x29cf90[_0x398c4c(0x1cb)]));
            return {
                'img': await _0x1347f7[_0x398c4c(0x1c5)](_0x29cf90[_0x398c4c(0x1cb)])
            };
        }
        var {
            img: _0x35d6f3
        } = await _0x4d2c5f(_0x434471);
        await _0x14ced5[_0x2359c0(0x1bc)]({
            'tag': 'iq'
            , 'attrs': {
                'to': _0x3aeaf4
                , 'type': 'set'
                , 'xmlns': _0x2359c0(0x1c6)
            }
            , 'content': [{
                'tag': _0x2359c0(0x1c8)
                , 'attrs': {
                    'type': _0x2359c0(0x1b3)
                }
                , 'content': _0x35d6f3
            }]
        }), _0x55976e[_0x2359c0(0x1b8)](_0x2359c0(0x1c7));
    } catch {
        return _0x55976e.reply('🤍 Responde a una *Imagen.*')
    }
};
handler.tags = ['owner']
handler.help = ['nuevafotobot *<imagen>*']
handler.command = ['nuevafotobot']
handler.owner = true 
export default handler;

function _0x14c2() {
    const _0x1897e4 = ['AUTO', 'user', '8CJixwu', 'getHeight', 'getBufferAsync', 'w:profile:picture', '🤍 Foto cambiada con exito.', 'picture', 'read', '1419731ZjYevm', 'MIME_JPEG', '82272azbcaw', '350agtQLJ', '279gQMikZ', 'mimetype', '188728rlRvtO', 'msg', 'jid', 'image', '1705364hxGRFM', '14905ZvBfug', '2578255zmHnCy', 'getWidth', 'reply', '1780230pdlTpE', 'download', 'quoted', 'query', '2810ZHRQDi', 'resize', '🤍 Responde a una *Imagen.*', 'rowner']
    _0x14c2 = function () {
        return _0x1897e4;
    };
    return _0x14c2();
}