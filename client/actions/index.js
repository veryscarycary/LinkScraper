import uuid from 'uuid';
import articleUtils from '../utils/articleUtils';
import ticketUtils from '../utils/ticketUtils';
import sessionUtils from '../utils/sessionUtils';
import searchUtils from '../utils/searchUtils';
import userUtils from '../utils/userUtils';

export const createArticle = (article) => ({
    type: 'CREATE_ARTICLE',
    payload: articleUtils.postArticle(article)
});

export const getArticles = () => ({
  type: 'GET_ARTICLES',
  payload: {
    promise: articleUtils.getArticles()
  }
});

export const getArticle = (id) => ({
  type: 'GET_ARTICLE',
  payload: {
    promise: articleUtils.getArticle(id)
  }
});

export const useArticle = (article, ticketId) => {
  var articleWithRelation = article
  articleWithRelation.relatedTickets = articleWithRelation.relatedTickets || [];
  articleWithRelation.relatedTickets.push(ticketId)
  return ({
    type: 'USE_ARTICLE',
    payload: articleUtils.editArticle(articleWithRelation)
  })
}

export const useTicket = (articleId, ticket) => {
  var ticketWithRelation = ticket
  ticketWithRelation.relatedTickets = ticketWithRelation.relatedTickets || [];
  ticketWithRelation.relatedArticles.push(articleId)
  return ({
    type: 'USE_TICKET',
    payload: ticketUtils.putTicket(ticketWithRelation)
  })
}

export const clearArticle = () => ({
  type: 'CLEAR_ARTICLE',
})

export const toggleArticle = () => ({
  type: 'TOGGLE_DISPLAY',
})

export const editArticle = (id) => ({
  type: 'EDIT_ARTICLE',
  payload: articleUtils.editArticle(id)
});

export const deleteArticle = (id) => ({
  type: 'DELETE_ARTICLE',
  payload: articleUtils.deleteArticle(id)
})

export const loadTicketState = () => ({
  type: 'SET_NEW_TICKETS',
  payload: ticketUtils.getTickets()
});

export const toggleEdit = (article) => ({
  type: 'TOGGLE_EDIT_MODAL',
  payload: article
});

export const editField = (field, value) => ({
  type: 'EDIT_FIELD',
  payload: {
    field,
    value,
  }
});

export const getAuthLevel = (level) => ({
  type: 'GET_AUTH_LEVEL',
  payload: level,
});

export const searchArticles = (options) => ({
  type: 'SEARCH_ARTICLES',
  payload: searchUtils.search({...options, type:'kb'})
});

export const clearSearch = (options) => ({
  type: 'CLEAR_SEARCH',
});

export const toggleCreate = () => ({
  type: 'TOGGLE_CREATE',
});

export const submitEdit = (article) => ({
  type: 'SUBMIT_EDIT',
  payload: articleUtils.editArticle(article)
});

export const loadSearchState = (searchText) => ({
  type: 'SET_NEW_SEARCHTEXT',
  searchText
});

export const toggleProfileModal = () => ({
  type: 'TOGGLE_PROFILE_MODAL',
});

export const togglePictureEdit = () => ({
  type: 'TOGGLE_PICTURE_EDIT'
})

export const loadFilteredTicketState = (filteredTickets) => ({
  type: 'SET_FILTERED_TICKETS',
  filteredTickets
});

export const toggleTicketModal = (ticket) => ({
  type: 'TOGGLE_TICKET_MODAL',
  ticket,
});

export const loadCurrentUser = (sessionId) => ({
  type: 'SET_CURRENT_USER',
  payload: userUtils.getUser(sessionId)
});

export const resetCurrentUser = () => ({
  type: 'RESET_CURRENT_USER'
});


/* TICKET PAGE ACTIONS ARE DOWN HERE */

export const editTicketField = (field, value) => ({
  type: 'EDIT_TICKET_FIELD',
  payload: {
    field,
    value
  }
});

export const submitTicketEdit = (ticket) => ({
  type: 'SUBMIT_TICKET_EDIT',
  payload: ticketUtils.putTicket(ticket)
});

export const createTicket = (ticket) => ({
  type: 'CREATE_TICKET',
  payload: ticketUtils.createTicket(ticket)
});

export const getTicketForModal = (id) => ({
  type: 'GET_TICKET_FOR_MODAL',
  payload: ticketUtils.getTicket(id)
});

export const clearTicketForModal = () => ({
  type: 'CLEAR_TICKET_FOR_MODAL'
});

export const submitNewTicket = (ticket) => ({
  type: 'SUBMIT_NEW_TICKET',
  payload: ticketUtils.createTicket(ticket)
});

export const searchTicketArticles = (options) => ({
  type: 'SEARCH_TICKET_ARTICLES',
  payload: searchUtils.search({...options, type:'kb'})
});

export const clearTicketArticlesSearch = () => ({
  type: 'CLEAR_TICKET_ARTICLES_SEARCH',
});

export const getArticleForTicketSearch = (id) => ({
  type: 'GET_ARTICLE_FOR_TICKET_SEARCH',
  payload: articleUtils.getArticle(id),
});

export const closeTicketArticleModal = () => ({
  type: 'CLOSE_TICKET_ARTICLE_MODAL',
});

export const setModalArticles = (articles) => ({
  type: 'SET_MODAL_ARTICLES',
  payload: articles,
});

export const ticketSearch = (options) => ({
  type: 'TICKET_SEARCH',
  payload: searchUtils.search(options)
})

export const clearTicketSearch = (options) => ({
  type: 'CLEAR_TICKET_SEARCH',
})

export const setEditArticle = (id) => ({
  type: 'SET_EDIT_ARTICLE',
  payload: articleUtils.getArticle(id),
})
