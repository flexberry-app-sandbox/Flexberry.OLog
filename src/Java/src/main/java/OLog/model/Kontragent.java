package OLog.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OLog.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагент
 */
@Entity(name = "IISOLogКонтрагент")
@Table(schema = "public", name = "Контрагент")
public class Kontragent {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Организация")
    private String организация;

    @Column(name = "ОтветсЛицо")
    private String ответслицо;


    public Kontragent() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОрганизация() {
      return организация;
    }

    public void setОрганизация(String организация) {
      this.организация = организация;
    }

    public String getОтветсЛицо() {
      return ответслицо;
    }

    public void setОтветсЛицо(String ответслицо) {
      this.ответслицо = ответслицо;
    }


}