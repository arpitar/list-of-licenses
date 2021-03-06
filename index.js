module.exports = {
    MIT: {
        name: 'MIT License',
        text: require('raw!./licenses/mit.txt'),
        url: 'http://opensource.org/licenses/MIT',
        osiApproved: true,
        properties: ['year', 'copyrightHolders']
    },
    GPL2: {
        name: 'GNU General Public License (GPL) 2.0',
        text: require('raw!./licenses/gpl-2.0.txt'),
        url: 'http://www.gnu.org/licenses/gpl-2.0.txt',
        osiApproved: true
    },
    GPL3: {
        name: 'GNU General Public License (GPL) 3.0',
        text: require('raw!./licenses/gpl-3.0.txt'),
        url: 'http://www.gnu.org/licenses/gpl-3.0.txt',
        logoUrl: require('raw!./img/base64/gpl-3.0.base64'),
        osiApproved: true
    },
    Apache2: {
        name: 'Apache License 2.0',
        text: require('raw!./licenses/apache-2.0.txt'),
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        osiApproved: true
    },
    BSD2: {
        name: 'BSD 2-Clause "Simplified" License',
        text: require('raw!./licenses/bsd-2.0.txt'),
        url: 'http://opensource.org/licenses/BSD-3-Clause',
        logoUrl: require('raw!./img/base64/bsd-2.0.base64'),
        osiApproved: true,
        properties: ['year', 'copyrightHolders']
    },
    BSD3: {
        name: 'BSD 3-Clause "New"/"Revised" License',
        text: require('raw!./licenses/bsd-3.0.txt'),
        url: 'http://opensource.org/licenses/BSD-3-Clause',
        osiApproved: true,
        properties: ['year', 'copyrightHolders']
    },
    LGPL2_1: {
        name: 'GNU Lesser General Public License (LGPL) 2.1',
        text: require('raw!./licenses/lgpl-2.1.txt'),
        url: 'http://www.gnu.org/licenses/lgpl-2.1.txt',
        osiApproved: true
    },
    LGPL3: {
        name: 'GNU Lesser General Public License (LGPL) 3.0',
        text: require('raw!./licenses/lgpl-3.0.txt'),
        url: 'http://www.gnu.org/licenses/lgpl-3.0.txt',
        osiApproved: true
    },
    CC0: {
        name: 'CC0 1.0 Universal',
        text: require('raw!./licenses/cc0-1.0.txt'),
        url: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
        logoUrl: require('raw!./img/base64/cc0-1.0.base64'),
        osiApproved: false
    },
    CCBY: {
        name: 'CC-By Attribution 4.0 International',
        text: require('raw!./licenses/ccby-4.0.txt'),
        url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
        logoUrl: require('raw!./img/base64/ccby-4.0.base64'),
        osiApproved: false
    },
    Artistic2: {
        name: 'Artistic License 2.0',
        text: require('raw!./licenses/artistic-2.0.txt'),
        url: 'http://www.perlfoundation.org/attachment/legal/artistic-2_0.txt',
        osiApproved: true
    },
    Eclipse1: {
        name: 'Eclipse Public License 1.0',
        text: require('raw!./licenses/eclipse-1.0.txt'),
        url: 'http://www.eclipse.org/legal/epl-v10.html',
        osiApproved: true
    },
    Mozilla2: {
        name: 'Mozilla Public License 2.0',
        text: require('raw!./licenses/mozilla-2.0.txt'),
        url: 'https://www.mozilla.org/MPL/2.0/',
        osiApproved: true
    },
    AFL3: {
        name: 'Academic Free License (AFL) 3.0',
        text: require('raw!./licenses/afl-3.0.txt'),
        url: 'http://opensource.org/licenses/AFL-3.0',
        osiApproved: true
    }
};
