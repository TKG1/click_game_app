Rails.application.routes.draw do
  
  root 'tops#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :results, only: %i[index]
end
