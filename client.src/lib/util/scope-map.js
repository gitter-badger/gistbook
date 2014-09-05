/*
 * scopeMap
 * Maps the values of Github scopes to short,
 * user-friendly strings. I only mapped
 * the scopes that Gistbook is most likely
 * to use.
 *
 */

var scopeMap = {
  user: 'Profile information',
  'user:email': 'Email address',
  'public_repo': 'Public repositories',
  'repo': 'All repositories',
  'gist': 'Gists'
};

module.exports = scopeMap;