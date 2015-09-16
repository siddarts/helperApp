class HelperMailer < ActionMailer::Base
  default from: "Helper App"

  def send_help_request_email()
    # mail(to: 'siddarts@andrew.cmu.edu', subject: 'Python Help Request')
    mail(to: 'alicemcborie@gmail.com', subject: 'Python Help Request')
  end

  def send_help_request_text()
    # mail(to: '9089386327@txt.att.net', subject: 'Python Help Request')
    mail(to: '6507149731@txt.att.net', subject: 'Python Help Request')
  end
end
