class Api::MessagesController < ApplicationController
  def random_message
    render json: { message: Message.order('RANDOM()').first&.text || 'No messages available' }
  end
end
