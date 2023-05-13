class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_one :cart
  has_many :reviews,
  foreign_key: :reviewer_id,
  class_name: :Review

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def first_name_presence
    if !self.first_name.present? || !self.last_name.present?
      # errors.add(:name, "can't be blank")
      errors[:name] = ["can't be blank"]
    end
  end

  def is_valid_email
    if !self.email.present?
      # errors.add(:email, "can't be blank")
      errors[:email] = ["can't be blank"]
    end

    if self.email.include?('@') && self.email.include?('.')
      return true
    else
      # errors.add(:email, "is not a valid email address")
      errors[:email] = "is not a valid email address"
    end
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
