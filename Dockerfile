FROM httpd:2.4
RUN rm -rf /usr/local/apache2/htdocs/*
COPY ./Docker/ /usr/local/apache2/htdocs/
EXPOSE 80