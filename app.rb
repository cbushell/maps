require 'sinatra'


get '/api/bounding_boxes/:n,:s,:e,:w/pois' do
  require 'open-uri'
  open("http://apigateway.lonelyplanet.com/api/bounding_boxes/#{params[:n]},#{params[:s]},#{params[:e]},#{params[:w]}/pois").read
end