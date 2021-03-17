FROM httpd:2.4
COPY ./Docker/ /usr/local/apache2/htdocs/
EXPOSE 80
