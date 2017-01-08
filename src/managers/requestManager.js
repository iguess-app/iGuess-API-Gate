'use strict';

const requestPromise = require('request-promise');

module.exports = () => {

  const post = (uri, headers, body) => {
    if (!headers) {
      headers = {};
    }

    const options = {
      method: 'POST',
      uri,
      headers,
      body,
      json: true
    };

    return requestPromise(options)
      .then((result) => result)

  }

  const get = (uri, headers) => {
    if (!headers) {
      headers = {};
    }

    const options = {
      method: 'GET',
      uri,
      headers,
      json: true
    };

    return requestPromise(options)
      .then((result) => result)

  }

  return {
    post,
    get
  }
}